const weatherCache = new Map();
const CACHE_DURATION = 15 * 60 * 1e3;
export function getWeatherDescription(code: number) {
	switch (code) {
		case 0: return "Цэлмэг хүйтэн";
		case 1: return "Үүл багатай";
		case 2: return "Үүлшинэ";
		case 3: return "Бүрхэг";
		case 45:
		case 48: return "Цан хүүрэг, манан";
		case 51:
		case 53:
		case 55: return "Ялимгүй хур тунадас";
		case 61:
		case 63:
		case 65: return "Бороо орно";
		case 71: return "Ялимгүй цас орно";
		case 73: return "Цас орно";
		case 75: return "Ахиухан цас орно";
		case 77: return "Мөсөн мөхлөгт цас";
		case 80:
		case 81:
		case 82: return "Түр зуурын хур тунадас";
		case 85: return "Цасан шуургатай";
		case 86: return "Хүчтэй цасан шуурга";
		case 95:
		case 96:
		case 99: return "Ширүүн цасан ба шороон шуурга";
		default: return "Хүйтэн жавартай";
	}
}
export function getDayNameMn(dateStr: string) {
	const date = new Date(dateStr);
	const days = [
		"Ням",
		"Даваа",
		"Мягмар",
		"Лхагва",
		"Пүрэв",
		"Баасан",
		"Бямба"
	];
	return days[date.getDay()];
}
export async function fetchAimagWeather(lat: number, lng: number, aimagId: string) {
	const cached = weatherCache.get(aimagId);
	const now = Date.now();
	if (cached && now - cached.timestamp < CACHE_DURATION) {
		return {
			current: cached.current,
			forecast: cached.forecast
		};
	}
	try {
		const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,snowfall,weather_code,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,snowfall_sum,precipitation_probability_max,wind_speed_10m_max&timezone=Asia%2FUlaanbaatar`;
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Open-Meteo HTTP error: ${res.status}`);
		}
		const data = await res.json();
		const curr = data.current;
		const current = {
			temperature: Math.round(curr.temperature_2m),
			feelsLike: Math.round(curr.apparent_temperature),
			humidity: Math.round(curr.relative_humidity_2m),
			windSpeed: Math.round(curr.wind_speed_10m),
			windDirection: Math.round(curr.wind_direction_10m),
			snowfall: curr.snowfall || 0,
			precipitation: curr.precipitation || 0,
			weatherCode: curr.weather_code,
			weatherText: getWeatherDescription(curr.weather_code),
			isExtremeCold: curr.temperature_2m <= -30 || curr.apparent_temperature <= -35,
			isBlizzardRisk: (curr.snowfall > 0 || [
				71,
				73,
				75,
				85,
				86
			].includes(curr.weather_code)) && curr.wind_speed_10m >= 10,
			updatedAt: new Date().toLocaleTimeString("mn-MN", {
				hour: "2-digit",
				minute: "2-digit"
			})
		};
		const daily = data.daily;
		const forecast = [];
		if (daily && daily.time) {
			for (let i = 0; i < Math.min(daily.time.length, 7); i++) {
				forecast.push({
					date: daily.time[i],
					dayName: getDayNameMn(daily.time[i]),
					tempMax: Math.round(daily.temperature_2m_max[i]),
					tempMin: Math.round(daily.temperature_2m_min[i]),
					snowfallSum: Number((daily.snowfall_sum?.[i] || 0).toFixed(1)),
					precipProbMax: daily.precipitation_probability_max?.[i] || 0,
					windSpeedMax: Math.round(daily.wind_speed_10m_max[i]),
					weatherCode: daily.weather_code[i],
					weatherText: getWeatherDescription(daily.weather_code[i])
				});
			}
		}
		weatherCache.set(aimagId, {
			current,
			forecast,
			timestamp: now
		});
		return {
			current,
			forecast
		};
	} catch (error) {
		console.warn(`Weather fetch failed for ${aimagId}:`, error);
		throw error;
	}
}

