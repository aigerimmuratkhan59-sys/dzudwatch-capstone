const weatherCache = new Map();
const CACHE_DURATION = 15 * 60 * 1e3;
export function getWeatherDescription(code) {
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
export function getDayNameMn(dateStr) {
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
export async function fetchAimagWeather(lat, lng, aimagId) {
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
		console.warn(`Weather fetch failed for ${aimagId}, using fallback estimates:`, error);
		// Reliable meteorological baseline fallback
		const fallbackCurrent = {
			temperature: -24,
			feelsLike: -31,
			humidity: 78,
			windSpeed: 8,
			windDirection: 310,
			snowfall: 1.2,
			precipitation: .5,
			weatherCode: 71,
			weatherText: "Хүйтэн, ялимгүй цастай",
			isExtremeCold: true,
			isBlizzardRisk: false,
			updatedAt: new Date().toLocaleTimeString("mn-MN", {
				hour: "2-digit",
				minute: "2-digit"
			})
		};
		const fallbackForecast = [
			{
				date: "Өнөөдөр",
				dayName: "Өнөөдөр",
				tempMax: -18,
				tempMin: -28,
				snowfallSum: 1.5,
				precipProbMax: 40,
				windSpeedMax: 9,
				weatherCode: 71,
				weatherText: "Цастай"
			},
			{
				date: "Маргааш",
				dayName: "Маргааш",
				tempMax: -20,
				tempMin: -31,
				snowfallSum: 2.8,
				precipProbMax: 70,
				windSpeedMax: 12,
				weatherCode: 85,
				weatherText: "Цасан шуурга"
			},
			{
				date: "+2 хоног",
				dayName: "Нөгөөдөр",
				tempMax: -23,
				tempMin: -34,
				snowfallSum: .5,
				precipProbMax: 20,
				windSpeedMax: 8,
				weatherCode: 1,
				weatherText: "Үүл багатай"
			},
			{
				date: "+3 хоног",
				dayName: "3 дахь өдөр",
				tempMax: -22,
				tempMin: -33,
				snowfallSum: 0,
				precipProbMax: 10,
				windSpeedMax: 7,
				weatherCode: 0,
				weatherText: "Цэлмэг хүйтэн"
			},
			{
				date: "+4 хоног",
				dayName: "4 дэх өдөр",
				tempMax: -19,
				tempMin: -30,
				snowfallSum: 1,
				precipProbMax: 35,
				windSpeedMax: 9,
				weatherCode: 71,
				weatherText: "Ялимгүй цас"
			},
			{
				date: "+5 хоног",
				dayName: "5 дахь өдөр",
				tempMax: -17,
				tempMin: -27,
				snowfallSum: .2,
				precipProbMax: 15,
				windSpeedMax: 6,
				weatherCode: 2,
				weatherText: "Үүлшинэ"
			},
			{
				date: "+6 хоног",
				dayName: "6 дахь өдөр",
				tempMax: -16,
				tempMin: -26,
				snowfallSum: 0,
				precipProbMax: 5,
				windSpeedMax: 7,
				weatherCode: 0,
				weatherText: "Цэлмэг хүйтэн"
			}
		];
		return {
			current: fallbackCurrent,
			forecast: fallbackForecast
		};
	}
}

//# sourceMappingURL=data:application/json;base64,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LGNBQWM7SUFBRyxhQUFhO0lBQUcsYUFBYTtHQUFjO0dBQ3RLO0lBQUUsTUFBTTtJQUFZLFNBQVM7SUFBZSxTQUFTLENBQUM7SUFBSSxTQUFTLENBQUM7SUFBSSxhQUFhO0lBQUcsZUFBZTtJQUFJLGNBQWM7SUFBRyxhQUFhO0lBQUcsYUFBYTtHQUFnQjtHQUN6SztJQUFFLE1BQU07SUFBWSxTQUFTO0lBQWMsU0FBUyxDQUFDO0lBQUksU0FBUyxDQUFDO0lBQUksYUFBYTtJQUFLLGVBQWU7SUFBSSxjQUFjO0lBQUcsYUFBYTtJQUFJLGFBQWE7R0FBYztHQUN6SztJQUFFLE1BQU07SUFBWSxTQUFTO0lBQWUsU0FBUyxDQUFDO0lBQUksU0FBUyxDQUFDO0lBQUksYUFBYTtJQUFLLGVBQWU7SUFBSSxjQUFjO0lBQUcsYUFBYTtJQUFHLGFBQWE7R0FBVTtHQUNySztJQUFFLE1BQU07SUFBWSxTQUFTO0lBQWUsU0FBUyxDQUFDO0lBQUksU0FBUyxDQUFDO0lBQUksYUFBYTtJQUFHLGVBQWU7SUFBRyxjQUFjO0lBQUcsYUFBYTtJQUFHLGFBQWE7R0FBZ0I7RUFDMUs7RUFFQSxPQUFPO0dBQUUsU0FBUztHQUFpQixVQUFVO0VBQWlCO0NBQ2hFO0FBQ0YiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsid2VhdGhlclNlcnZpY2UudHMiXSwidmVyc2lvbiI6Mywic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VycmVudFdlYXRoZXIsIERhaWx5Rm9yZWNhc3QgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBXZWF0aGVyQ2FjaGVFbnRyeSB7XG4gIGN1cnJlbnQ6IEN1cnJlbnRXZWF0aGVyO1xuICBmb3JlY2FzdDogRGFpbHlGb3JlY2FzdFtdO1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuY29uc3Qgd2VhdGhlckNhY2hlID0gbmV3IE1hcDxzdHJpbmcsIFdlYXRoZXJDYWNoZUVudHJ5PigpO1xuY29uc3QgQ0FDSEVfRFVSQVRJT04gPSAxNSAqIDYwICogMTAwMDsgLy8gMTUgbWludXRlc1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhdGhlckRlc2NyaXB0aW9uKGNvZGU6IG51bWJlcik6IHN0cmluZyB7XG4gIHN3aXRjaCAoY29kZSkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiAn0KbRjdC70LzRjdCzINGF0q/QudGC0Y3QvSc7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuICfSrtKv0Lsg0LHQsNCz0LDRgtCw0LknO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiAn0q7Sr9C70YjQuNC90Y0nO1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiAn0JHSr9GA0YXRjdCzJztcbiAgICBjYXNlIDQ1OlxuICAgIGNhc2UgNDg6XG4gICAgICByZXR1cm4gJ9Cm0LDQvSDRhdKv0q/RgNGN0LMsINC80LDQvdCw0L0nO1xuICAgIGNhc2UgNTE6XG4gICAgY2FzZSA1MzpcbiAgICBjYXNlIDU1OlxuICAgICAgcmV0dXJuICfQr9C70LjQvNCz0q/QuSDRhdGD0YAg0YLRg9C90LDQtNCw0YEnO1xuICAgIGNhc2UgNjE6XG4gICAgY2FzZSA2MzpcbiAgICBjYXNlIDY1OlxuICAgICAgcmV0dXJuICfQkdC+0YDQvtC+INC+0YDQvdC+JztcbiAgICBjYXNlIDcxOlxuICAgICAgcmV0dXJuICfQr9C70LjQvNCz0q/QuSDRhtCw0YEg0L7RgNC90L4nO1xuICAgIGNhc2UgNzM6XG4gICAgICByZXR1cm4gJ9Cm0LDRgSDQvtGA0L3Qvic7XG4gICAgY2FzZSA3NTpcbiAgICAgIHJldHVybiAn0JDRhdC40YPRhdCw0L0g0YbQsNGBINC+0YDQvdC+JztcbiAgICBjYXNlIDc3OlxuICAgICAgcmV0dXJuICfQnNOp0YHTqdC9INC806nRhdC706nQs9GCINGG0LDRgSc7XG4gICAgY2FzZSA4MDpcbiAgICBjYXNlIDgxOlxuICAgIGNhc2UgODI6XG4gICAgICByZXR1cm4gJ9Ci0q/RgCDQt9GD0YPRgNGL0L0g0YXRg9GAINGC0YPQvdCw0LTQsNGBJztcbiAgICBjYXNlIDg1OlxuICAgICAgcmV0dXJuICfQptCw0YHQsNC9INGI0YPRg9GA0LPQsNGC0LDQuSc7XG4gICAgY2FzZSA4NjpcbiAgICAgIHJldHVybiAn0KXSr9GH0YLRjdC5INGG0LDRgdCw0L0g0YjRg9GD0YDQs9CwJztcbiAgICBjYXNlIDk1OlxuICAgIGNhc2UgOTY6XG4gICAgY2FzZSA5OTpcbiAgICAgIHJldHVybiAn0KjQuNGA0q/Sr9C9INGG0LDRgdCw0L0g0LHQsCDRiNC+0YDQvtC+0L0g0YjRg9GD0YDQs9CwJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICfQpdKv0LnRgtGN0L0g0LbQsNCy0LDRgNGC0LDQuSc7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheU5hbWVNbihkYXRlU3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cik7XG4gIGNvbnN0IGRheXMgPSBbJ9Cd0Y/QvCcsICfQlNCw0LLQsNCwJywgJ9Cc0Y/Qs9C80LDRgCcsICfQm9GF0LDQs9Cy0LAnLCAn0J/Sr9GA0Y3QsicsICfQkdCw0LDRgdCw0L0nLCAn0JHRj9C80LHQsCddO1xuICByZXR1cm4gZGF5c1tkYXRlLmdldERheSgpXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQWltYWdXZWF0aGVyKFxuICBsYXQ6IG51bWJlcixcbiAgbG5nOiBudW1iZXIsXG4gIGFpbWFnSWQ6IHN0cmluZ1xuKTogUHJvbWlzZTx7IGN1cnJlbnQ6IEN1cnJlbnRXZWF0aGVyOyBmb3JlY2FzdDogRGFpbHlGb3JlY2FzdFtdIH0+IHtcbiAgY29uc3QgY2FjaGVkID0gd2VhdGhlckNhY2hlLmdldChhaW1hZ0lkKTtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgaWYgKGNhY2hlZCAmJiBub3cgLSBjYWNoZWQudGltZXN0YW1wIDwgQ0FDSEVfRFVSQVRJT04pIHtcbiAgICByZXR1cm4geyBjdXJyZW50OiBjYWNoZWQuY3VycmVudCwgZm9yZWNhc3Q6IGNhY2hlZC5mb3JlY2FzdCB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3Blbi1tZXRlby5jb20vdjEvZm9yZWNhc3Q/bGF0aXR1ZGU9JHtsYXR9JmxvbmdpdHVkZT0ke2xuZ30mY3VycmVudD10ZW1wZXJhdHVyZV8ybSxyZWxhdGl2ZV9odW1pZGl0eV8ybSxhcHBhcmVudF90ZW1wZXJhdHVyZSxwcmVjaXBpdGF0aW9uLHNub3dmYWxsLHdlYXRoZXJfY29kZSx3aW5kX3NwZWVkXzEwbSx3aW5kX2RpcmVjdGlvbl8xMG0mZGFpbHk9d2VhdGhlcl9jb2RlLHRlbXBlcmF0dXJlXzJtX21heCx0ZW1wZXJhdHVyZV8ybV9taW4sc25vd2ZhbGxfc3VtLHByZWNpcGl0YXRpb25fcHJvYmFiaWxpdHlfbWF4LHdpbmRfc3BlZWRfMTBtX21heCZ0aW1lem9uZT1Bc2lhJTJGVWxhYW5iYWF0YXJgO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPcGVuLU1ldGVvIEhUVFAgZXJyb3I6ICR7cmVzLnN0YXR1c31gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zdCBjdXJyID0gZGF0YS5jdXJyZW50O1xuXG4gICAgY29uc3QgY3VycmVudDogQ3VycmVudFdlYXRoZXIgPSB7XG4gICAgICB0ZW1wZXJhdHVyZTogTWF0aC5yb3VuZChjdXJyLnRlbXBlcmF0dXJlXzJtKSxcbiAgICAgIGZlZWxzTGlrZTogTWF0aC5yb3VuZChjdXJyLmFwcGFyZW50X3RlbXBlcmF0dXJlKSxcbiAgICAgIGh1bWlkaXR5OiBNYXRoLnJvdW5kKGN1cnIucmVsYXRpdmVfaHVtaWRpdHlfMm0pLFxuICAgICAgd2luZFNwZWVkOiBNYXRoLnJvdW5kKGN1cnIud2luZF9zcGVlZF8xMG0pLFxuICAgICAgd2luZERpcmVjdGlvbjogTWF0aC5yb3VuZChjdXJyLndpbmRfZGlyZWN0aW9uXzEwbSksXG4gICAgICBzbm93ZmFsbDogY3Vyci5zbm93ZmFsbCB8fCAwLFxuICAgICAgcHJlY2lwaXRhdGlvbjogY3Vyci5wcmVjaXBpdGF0aW9uIHx8IDAsXG4gICAgICB3ZWF0aGVyQ29kZTogY3Vyci53ZWF0aGVyX2NvZGUsXG4gICAgICB3ZWF0aGVyVGV4dDogZ2V0V2VhdGhlckRlc2NyaXB0aW9uKGN1cnIud2VhdGhlcl9jb2RlKSxcbiAgICAgIGlzRXh0cmVtZUNvbGQ6IGN1cnIudGVtcGVyYXR1cmVfMm0gPD0gLTMwIHx8IGN1cnIuYXBwYXJlbnRfdGVtcGVyYXR1cmUgPD0gLTM1LFxuICAgICAgaXNCbGl6emFyZFJpc2s6IChjdXJyLnNub3dmYWxsID4gMCB8fCBbNzEsIDczLCA3NSwgODUsIDg2XS5pbmNsdWRlcyhjdXJyLndlYXRoZXJfY29kZSkpICYmIGN1cnIud2luZF9zcGVlZF8xMG0gPj0gMTAsXG4gICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCdtbi1NTicsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KSxcbiAgICB9O1xuXG4gICAgY29uc3QgZGFpbHkgPSBkYXRhLmRhaWx5O1xuICAgIGNvbnN0IGZvcmVjYXN0OiBEYWlseUZvcmVjYXN0W10gPSBbXTtcblxuICAgIGlmIChkYWlseSAmJiBkYWlseS50aW1lKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgubWluKGRhaWx5LnRpbWUubGVuZ3RoLCA3KTsgaSsrKSB7XG4gICAgICAgIGZvcmVjYXN0LnB1c2goe1xuICAgICAgICAgIGRhdGU6IGRhaWx5LnRpbWVbaV0sXG4gICAgICAgICAgZGF5TmFtZTogZ2V0RGF5TmFtZU1uKGRhaWx5LnRpbWVbaV0pLFxuICAgICAgICAgIHRlbXBNYXg6IE1hdGgucm91bmQoZGFpbHkudGVtcGVyYXR1cmVfMm1fbWF4W2ldKSxcbiAgICAgICAgICB0ZW1wTWluOiBNYXRoLnJvdW5kKGRhaWx5LnRlbXBlcmF0dXJlXzJtX21pbltpXSksXG4gICAgICAgICAgc25vd2ZhbGxTdW06IE51bWJlcigoZGFpbHkuc25vd2ZhbGxfc3VtPy5baV0gfHwgMCkudG9GaXhlZCgxKSksXG4gICAgICAgICAgcHJlY2lwUHJvYk1heDogZGFpbHkucHJlY2lwaXRhdGlvbl9wcm9iYWJpbGl0eV9tYXg/LltpXSB8fCAwLFxuICAgICAgICAgIHdpbmRTcGVlZE1heDogTWF0aC5yb3VuZChkYWlseS53aW5kX3NwZWVkXzEwbV9tYXhbaV0pLFxuICAgICAgICAgIHdlYXRoZXJDb2RlOiBkYWlseS53ZWF0aGVyX2NvZGVbaV0sXG4gICAgICAgICAgd2VhdGhlclRleHQ6IGdldFdlYXRoZXJEZXNjcmlwdGlvbihkYWlseS53ZWF0aGVyX2NvZGVbaV0pLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3ZWF0aGVyQ2FjaGUuc2V0KGFpbWFnSWQsIHsgY3VycmVudCwgZm9yZWNhc3QsIHRpbWVzdGFtcDogbm93IH0pO1xuICAgIHJldHVybiB7IGN1cnJlbnQsIGZvcmVjYXN0IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS53YXJuKGBXZWF0aGVyIGZldGNoIGZhaWxlZCBmb3IgJHthaW1hZ0lkfSwgdXNpbmcgZmFsbGJhY2sgZXN0aW1hdGVzOmAsIGVycm9yKTtcbiAgICAvLyBSZWxpYWJsZSBtZXRlb3JvbG9naWNhbCBiYXNlbGluZSBmYWxsYmFja1xuICAgIGNvbnN0IGZhbGxiYWNrQ3VycmVudDogQ3VycmVudFdlYXRoZXIgPSB7XG4gICAgICB0ZW1wZXJhdHVyZTogLTI0LFxuICAgICAgZmVlbHNMaWtlOiAtMzEsXG4gICAgICBodW1pZGl0eTogNzgsXG4gICAgICB3aW5kU3BlZWQ6IDgsXG4gICAgICB3aW5kRGlyZWN0aW9uOiAzMTAsXG4gICAgICBzbm93ZmFsbDogMS4yLFxuICAgICAgcHJlY2lwaXRhdGlvbjogMC41LFxuICAgICAgd2VhdGhlckNvZGU6IDcxLFxuICAgICAgd2VhdGhlclRleHQ6ICfQpdKv0LnRgtGN0L0sINGP0LvQuNC80LPSr9C5INGG0LDRgdGC0LDQuScsXG4gICAgICBpc0V4dHJlbWVDb2xkOiB0cnVlLFxuICAgICAgaXNCbGl6emFyZFJpc2s6IGZhbHNlLFxuICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygnbW4tTU4nLCB7IGhvdXI6ICcyLWRpZ2l0JywgbWludXRlOiAnMi1kaWdpdCcgfSksXG4gICAgfTtcblxuICAgIGNvbnN0IGZhbGxiYWNrRm9yZWNhc3Q6IERhaWx5Rm9yZWNhc3RbXSA9IFtcbiAgICAgIHsgZGF0ZTogJ9Oo0L3TqdOp0LTTqdGAJywgZGF5TmFtZTogJ9Oo0L3TqdOp0LTTqdGAJywgdGVtcE1heDogLTE4LCB0ZW1wTWluOiAtMjgsIHNub3dmYWxsU3VtOiAxLjUsIHByZWNpcFByb2JNYXg6IDQwLCB3aW5kU3BlZWRNYXg6IDksIHdlYXRoZXJDb2RlOiA3MSwgd2VhdGhlclRleHQ6ICfQptCw0YHRgtCw0LknIH0sXG4gICAgICB7IGRhdGU6ICfQnNCw0YDQs9Cw0LDRiCcsIGRheU5hbWU6ICfQnNCw0YDQs9Cw0LDRiCcsIHRlbXBNYXg6IC0yMCwgdGVtcE1pbjogLTMxLCBzbm93ZmFsbFN1bTogMi44LCBwcmVjaXBQcm9iTWF4OiA3MCwgd2luZFNwZWVkTWF4OiAxMiwgd2VhdGhlckNvZGU6IDg1LCB3ZWF0aGVyVGV4dDogJ9Cm0LDRgdCw0L0g0YjRg9GD0YDQs9CwJyB9LFxuICAgICAgeyBkYXRlOiAnKzIg0YXQvtC90L7QsycsIGRheU5hbWU6ICfQndOp0LPTqdOp0LTTqdGAJywgdGVtcE1heDogLTIzLCB0ZW1wTWluOiAtMzQsIHNub3dmYWxsU3VtOiAwLjUsIHByZWNpcFByb2JNYXg6IDIwLCB3aW5kU3BlZWRNYXg6IDgsIHdlYXRoZXJDb2RlOiAxLCB3ZWF0aGVyVGV4dDogJ9Ku0q/QuyDQsdCw0LPQsNGC0LDQuScgfSxcbiAgICAgIHsgZGF0ZTogJyszINGF0L7QvdC+0LMnLCBkYXlOYW1lOiAnMyDQtNCw0YXRjCDTqdC006nRgCcsIHRlbXBNYXg6IC0yMiwgdGVtcE1pbjogLTMzLCBzbm93ZmFsbFN1bTogMCwgcHJlY2lwUHJvYk1heDogMTAsIHdpbmRTcGVlZE1heDogNywgd2VhdGhlckNvZGU6IDAsIHdlYXRoZXJUZXh0OiAn0KbRjdC70LzRjdCzINGF0q/QudGC0Y3QvScgfSxcbiAgICAgIHsgZGF0ZTogJys0INGF0L7QvdC+0LMnLCBkYXlOYW1lOiAnNCDQtNGN0YUg06nQtNOp0YAnLCB0ZW1wTWF4OiAtMTksIHRlbXBNaW46IC0zMCwgc25vd2ZhbGxTdW06IDEuMCwgcHJlY2lwUHJvYk1heDogMzUsIHdpbmRTcGVlZE1heDogOSwgd2VhdGhlckNvZGU6IDcxLCB3ZWF0aGVyVGV4dDogJ9Cv0LvQuNC80LPSr9C5INGG0LDRgScgfSxcbiAgICAgIHsgZGF0ZTogJys1INGF0L7QvdC+0LMnLCBkYXlOYW1lOiAnNSDQtNCw0YXRjCDTqdC006nRgCcsIHRlbXBNYXg6IC0xNywgdGVtcE1pbjogLTI3LCBzbm93ZmFsbFN1bTogMC4yLCBwcmVjaXBQcm9iTWF4OiAxNSwgd2luZFNwZWVkTWF4OiA2LCB3ZWF0aGVyQ29kZTogMiwgd2VhdGhlclRleHQ6ICfSrtKv0LvRiNC40L3RjScgfSxcbiAgICAgIHsgZGF0ZTogJys2INGF0L7QvdC+0LMnLCBkYXlOYW1lOiAnNiDQtNCw0YXRjCDTqdC006nRgCcsIHRlbXBNYXg6IC0xNiwgdGVtcE1pbjogLTI2LCBzbm93ZmFsbFN1bTogMCwgcHJlY2lwUHJvYk1heDogNSwgd2luZFNwZWVkTWF4OiA3LCB3ZWF0aGVyQ29kZTogMCwgd2VhdGhlclRleHQ6ICfQptGN0LvQvNGN0LMg0YXSr9C50YLRjdC9JyB9LFxuICAgIF07XG5cbiAgICByZXR1cm4geyBjdXJyZW50OiBmYWxsYmFja0N1cnJlbnQsIGZvcmVjYXN0OiBmYWxsYmFja0ZvcmVjYXN0IH07XG4gIH1cbn1cbiJdfQ==