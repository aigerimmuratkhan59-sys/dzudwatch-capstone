var e=`export const AIMAGS_DATA = [
	{
		id: "arkhangai",
		shapeName: "Arkhangai",
		iso: "MN-073",
		nameMn: "Архангай",
		nameEn: "Arkhangai",
		centerMn: "Цэцэрлэг хот",
		centerCoordinates: [47.4764, 101.4542],
		region: "Хангайн бүс",
		areaKm2: 55314,
		population: 95300,
		livestock: {
			total: 5840200,
			horses: 442100,
			cattle: 792400,
			camels: 2100,
			sheep: 2981300,
			goats: 1622300,
			yearChangePercent: -4.8,
			densityPerSqKm: 105.6
		},
		pasture: {
			overloadRatio: 2.8,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: 2.6,
			fodderPreparedPercent: 82,
			hayPreparedTons: 112e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "critical",
			levelLabel: "Нэн их эрсдэлтэй",
			score: 88,
			primaryType: "Цагаан зуд",
			snowDepthCm: 32,
			snowCoverPercent: 89,
			affectedSoumsCount: 16,
			totalSoums: 19,
			summary: "Хангайн нурууны дагуу цасны зузаан 25-45 см хүрч, мал бэлчээрлэх боломж хумигдсан. Эрдэнэбулган, Чулуут, Тариат сумдад цас нягтарч төмөрлөг хатуу хэв үүссэн.",
			criticalWarning: "Цасан хунгарт боогдсон сумдын өвс тэжээлийн тээвэрлэлтэд хүндрэл үүссэн. Малчдыг отор нүүдлээс зайлсхийхийг анхааруулж байна."
		},
		herderAdvisories: {
			urgentActions: [
				"Цасан хунгар ихтэй уулын бэл, жалганаас малыг нөмөр нөөлөг энгэр рүү шилжүүлэх",
				"Нялх төл, туранги сувай малыг өдөр бүр нэмэгдэл уураг, хужир бүхий хүчит тэжээлээр тэжээх",
				"Цас хөлдөж мөстсөн тул малын туурай хөлдөхөөс сэргийлж хашааны бууцыг хуурай байлгах"
			],
			grazingAdvice: "Өдрийн дулаан цаг буюу 11:00-16:00 хооронд ойрын энгэр бэлчээрт гаргаж, хүйтэн жавар эхлэхээс өмнө хотлуулах.",
			feedNutritionAdvice: "Боодлын өвсийг жижиглэн уураглаг хивэг, овьёосны халуун зуурмагтай хольж 1 бодод өдөрт 2-3 кг нэмэлтээр өгөх.",
			shelterColdProtection: "Хашаа хорооны хойд салхины хаалтыг зузаалж, дулаалгын эсгий нөмрөг бэлтгэх.",
			emergencyContacts: [{
				name: "Архангай ОБГ жижүүр",
				phone: "7033-105"
			}, {
				name: "Аймгийн ХХААГ",
				phone: "7033-2849"
			}]
		}
	},
	{
		id: "bayan-ulgii",
		shapeName: "Bayan-Ölgii",
		iso: "MN-071",
		nameMn: "Баян-Өлгий",
		nameEn: "Bayan-Ulgii",
		centerMn: "Өлгий хот",
		centerCoordinates: [48.9711, 89.9622],
		region: "Баруун бүс",
		areaKm2: 45705,
		population: 114500,
		livestock: {
			total: 2420100,
			horses: 145e3,
			cattle: 188e3,
			camels: 7200,
			sheep: 112e4,
			goats: 959900,
			yearChangePercent: -2.1,
			densityPerSqKm: 52.9
		},
		pasture: {
			overloadRatio: 1.7,
			status: "moderate_overload",
			statusLabel: "Даац 1-2 дахин хэтэрсэн",
			yieldCwtHa: 2.1,
			fodderPreparedPercent: 88,
			hayPreparedTons: 78e3,
			grazingPressure: "Дунд зэрэг"
		},
		dzudRisk: {
			level: "high",
			levelLabel: "Их эрсдэлтэй",
			score: 72,
			primaryType: "Хүйтний зуд",
			snowDepthCm: 22,
			snowCoverPercent: 78,
			affectedSoumsCount: 9,
			totalSoums: 13,
			summary: "Алтайн өндөр уулын бүсэд шөнийн температур -38°C хүрч, хөндий хоолойгоор цас нягтарсан. Сагсай, Цэнгэл сумдын өндөр даваанууд хаагдах эрсдэлтэй.",
			criticalWarning: "Өндөр уулын даваа гүвээнд хүчтэй шуурга шуурах тул алсын замд гарахгүй байх."
		},
		herderAdvisories: {
			urgentActions: [
				"Салхины уруу малаа бэлчээхээс эрс зайлсхийх",
				"Өвөлжөөний нөөц өвс, хужир шүүг аймгийн нөөцөөс хүлээн авах хүсэлт гаргах",
				"Малын усан хангамжийг тасалдуулахгүй байх, гол мөрний мөсийг өдөр бүр цоолох"
			],
			grazingAdvice: "Салхигүй өдрүүдэд нарлаг энгэрээр богино зайд бэлчээж, хүчтэй салхины үед хашаандаа тэжээх.",
			feedNutritionAdvice: "Жавартай өдрүүдэд адуу болон бог малд эрдэс дутагдлаас сэргийлж давс, хужир тогтмол тавих.",
			shelterColdProtection: "Чулуун болон модон хорооны завсрыг шавраар шавах, шалыг хуурай бууцаар дэвсэх.",
			emergencyContacts: [{
				name: "Баян-Өлгий ОБГ",
				phone: "7042-105"
			}, {
				name: "Мал эмнэлгийн газар",
				phone: "7042-2301"
			}]
		}
	},
	{
		id: "bayankhongor",
		shapeName: "Bayankhongor",
		iso: "MN-069",
		nameMn: "Баянхонгор",
		nameEn: "Bayankhongor",
		centerMn: "Баянхонгор хот",
		centerCoordinates: [46.1944, 100.7181],
		region: "Хангайн бүс",
		areaKm2: 115978,
		population: 88700,
		livestock: {
			total: 4120800,
			horses: 182300,
			cattle: 221500,
			camels: 51200,
			sheep: 1610400,
			goats: 2055400,
			yearChangePercent: -7.4,
			densityPerSqKm: 35.5
		},
		pasture: {
			overloadRatio: 3.2,
			status: "critical_overload",
			statusLabel: "Даац 3-аас дээш дахин хэтэрсэн",
			yieldCwtHa: 1.4,
			fodderPreparedPercent: 68,
			hayPreparedTons: 54e3,
			grazingPressure: "Нэн ачаалалтай"
		},
		dzudRisk: {
			level: "critical",
			levelLabel: "Нэн их эрсдэлтэй",
			score: 91,
			primaryType: "Хавсарсан зуд",
			snowDepthCm: 28,
			snowCoverPercent: 86,
			affectedSoumsCount: 17,
			totalSoums: 20,
			summary: "Хангайн болон говийн бүсийн зааг нутгаар бэлчээрийн ургац зун маш муу гарч, өвлийн эхэнд цас эрт орж мөстсөн. Говь-Хангайн сумдад мал онд ороход маш хүнд байна.",
			criticalWarning: "Шинэжинст, Баян-Өндөр, Баянговь, Богд сумдад өвс тэжээлийн хомсдол нэн өндөр түвшинд хүрсэн."
		},
		herderAdvisories: {
			urgentActions: [
				"Аймгийн онцгой комисс болон сумын зөвлөлд нэн яаралтай тусламжийн өвс тэжээлийн захиалга өгөх",
				"Сувай болон туранги богийг ялган тусгаарлаж дулаан байранд тэжээх",
				"Тэмээ, адууны бэлчээрийг говийн бут сөөгт бүс рүү шилжүүлэх"
			],
			grazingAdvice: "Цас зузаан тогтсон тал газраас зайлсхийж, салхины үлээлтээр цас багассан шил хяр бэлчээрт маллах.",
			feedNutritionAdvice: "Эрдэсжүүлсэн холимог тэжээл, буудай, эрдэнэ шишийн хэлтсийг халуун усаар дэвтээн өгөх.",
			shelterColdProtection: "Хашаа саравчинд гялгар цаас, хулсан нөмрөг давхар татаж салхи хаах.",
			emergencyContacts: [{
				name: "Баянхонгор ОБГ",
				phone: "7044-105"
			}, {
				name: "Аймгийн ХХААГ",
				phone: "7044-2451"
			}]
		}
	},
	{
		id: "bulgan",
		shapeName: "Bulgan",
		iso: "MN-067",
		nameMn: "Булган",
		nameEn: "Bulgan",
		centerMn: "Булган хот",
		centerCoordinates: [48.8125, 103.5347],
		region: "Хангайн бүс",
		areaKm2: 48733,
		population: 62100,
		livestock: {
			total: 3950400,
			horses: 412e3,
			cattle: 489e3,
			camels: 1400,
			sheep: 198e4,
			goats: 1068e3,
			yearChangePercent: -1.8,
			densityPerSqKm: 81.1
		},
		pasture: {
			overloadRatio: 2.1,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: 3.1,
			fodderPreparedPercent: 91,
			hayPreparedTons: 135e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "moderate",
			levelLabel: "Дунд эрсдэлтэй",
			score: 58,
			primaryType: "Цагаан зуд",
			snowDepthCm: 18,
			snowCoverPercent: 72,
			affectedSoumsCount: 8,
			totalSoums: 16,
			summary: "Хангал, Сэлэнгэ, Тэшиг сумдад цас харьцангуй зузаан боловч өвсний гарц сайн байсан тул нөхцөл байдал тогтвортой. Урд талын сумдад цас багатай.",
			criticalWarning: null
		},
		herderAdvisories: {
			urgentActions: [
				"Өвс тэжээлийн нөөцийг хуваарийн дагуу гамтай хэрэглэх",
				"Бэлчээрийн сэлгээг ойн төгөл, уулын ам руу зөв зохион байгуулах",
				"Мал сүргийг эрүүл мэндийн урьдчилан сэргийлэх вакцинжуулалтад бүрэн хамруулах"
			],
			grazingAdvice: "Ойн цоорхой болон уулын энгэр бэлээр маллаж цаснаас хамгаалах.",
			feedNutritionAdvice: "Сайн чанарын ногоон тэжээл, байгалийн хадлангийн өвсийг тогтмол өгөх.",
			shelterColdProtection: "Хашаа хорооны цасыг арилгаж, нойтон хөр үүсэхээс сэргийлэх.",
			emergencyContacts: [{
				name: "Булган ОБГ",
				phone: "7034-105"
			}, {
				name: "ХХААГ зөвлөгөө",
				phone: "7034-2290"
			}]
		}
	},
	{
		id: "govi-altai",
		shapeName: "Govi-Altai",
		iso: "MN-065",
		nameMn: "Говь-Алтай",
		nameEn: "Govi-Altai",
		centerMn: "Алтай хот",
		centerCoordinates: [46.3722, 96.2583],
		region: "Баруун бүс",
		areaKm2: 141447,
		population: 58300,
		livestock: {
			total: 3410500,
			horses: 138e3,
			cattle: 124e3,
			camels: 47800,
			sheep: 1350700,
			goats: 175e4,
			yearChangePercent: -6.2,
			densityPerSqKm: 24.1
		},
		pasture: {
			overloadRatio: 3.4,
			status: "critical_overload",
			statusLabel: "Даац 3-аас дээш дахин хэтэрсэн",
			yieldCwtHa: 1.1,
			fodderPreparedPercent: 62,
			hayPreparedTons: 41e3,
			grazingPressure: "Нэн ачаалалтай"
		},
		dzudRisk: {
			level: "critical",
			levelLabel: "Нэн их эрсдэлтэй",
			score: 93,
			primaryType: "Хар зуд",
			snowDepthCm: 14,
			snowCoverPercent: 65,
			affectedSoumsCount: 15,
			totalSoums: 18,
			summary: "Зуны гангийн улмаас ургамал ургаагүй, өвөлдөө цас орохгүй хүйтэн жавар чангарч ус худаг хөлдсөн хар зудын нөхцөл бүрдсэн. Малын ундаа хомсдож байна.",
			criticalWarning: "Тонхил, Дарви, Шарга, Халиун, Цээл сумдад усжуулалт болон тэжээлийн тусламж яаралтай шаардлагатай."
		},
		herderAdvisories: {
			urgentActions: [
				"Худаг усны хоолой хөлдөхөөс сэргийлж дулаалах, усыг бүлээнээр өгөх",
				"Хар зудтай сумдын малыг зэргэлдээх нөөц бэлчээрт гэрээгээр оторлуулах",
				"Ямаа, хонинд эрдэс тэжээл, давсыг усанд уусган өгч шингэн алдалтаас сэргийлэх"
			],
			grazingAdvice: "Салхи ихтэй тал газарт биш, хад асга нөмөртэй хөндийд бэлчээх.",
			feedNutritionAdvice: "Шим тэжээлтэй багсармал тэжээл, шар буурцагны шахдас бага тунгаар өдөрт 2 удаа өгөх.",
			shelterColdProtection: "Шөнийн цагаар битүү хашаанд байлгаж, салхины сийгэлтийг бүрэн хаах.",
			emergencyContacts: [{
				name: "Говь-Алтай ОБГ",
				phone: "7048-105"
			}, {
				name: "Онцгой комиссын шуурхай",
				phone: "7048-2612"
			}]
		}
	},
	{
		id: "govisumber",
		shapeName: "Govisumber",
		iso: "MN-064",
		nameMn: "Говьсүмбэр",
		nameEn: "Govisumber",
		centerMn: "Чойр хот",
		centerCoordinates: [46.5167, 108.6333],
		region: "Төвийн бүс",
		areaKm2: 5541,
		population: 18200,
		livestock: {
			total: 485e3,
			horses: 49e3,
			cattle: 42e3,
			camels: 3800,
			sheep: 215e3,
			goats: 175200,
			yearChangePercent: -.9,
			densityPerSqKm: 87.5
		},
		pasture: {
			overloadRatio: 1.9,
			status: "moderate_overload",
			statusLabel: "Даац 1-2 дахин хэтэрсэн",
			yieldCwtHa: 1.9,
			fodderPreparedPercent: 86,
			hayPreparedTons: 14200,
			grazingPressure: "Дунд зэрэг"
		},
		dzudRisk: {
			level: "moderate",
			levelLabel: "Дунд эрсдэлтэй",
			score: 52,
			primaryType: "Цагаан зуд",
			snowDepthCm: 12,
			snowCoverPercent: 60,
			affectedSoumsCount: 2,
			totalSoums: 3,
			summary: "Цасны зузаан дунджаар 10-15 см, төмөр зам дагуу тээвэр логистик найдвартай тул өвс тэжээлийн нийлүүлэлт саадгүй байна.",
			criticalWarning: null
		},
		herderAdvisories: {
			urgentActions: ["Төмөр зам, авто замын ойролцоо бэлчээрлэж буй малыг осол аваараас сэргийлэх", "Бэлтгэсэн тэжээлийн нөөцөө ариг гамтай хуваарилах"],
			grazingAdvice: "Өдрийн гэрэлтэй цагт тогтуун бэлчээрлүүлэх.",
			feedNutritionAdvice: "Хадлангийн ногоон өвсөөр тогтмол нэмэгдэл өгөх.",
			shelterColdProtection: "Хашааны салхин талыг банз болон брезентээр бэхлэх.",
			emergencyContacts: [{
				name: "Говьсүмбэр ОБГ",
				phone: "7054-105"
			}]
		}
	},
	{
		id: "darkhan-uul",
		shapeName: "Darkhan-Uul",
		iso: "MN-037",
		nameMn: "Дархан-Уул",
		nameEn: "Darkhan-Uul",
		centerMn: "Дархан хот",
		centerCoordinates: [49.4867, 105.9228],
		region: "Төвийн бүс",
		areaKm2: 3275,
		population: 107e3,
		livestock: {
			total: 398e3,
			horses: 32e3,
			cattle: 75e3,
			camels: 400,
			sheep: 178e3,
			goats: 112600,
			yearChangePercent: +1.2,
			densityPerSqKm: 121.5
		},
		pasture: {
			overloadRatio: 2.2,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: 3.8,
			fodderPreparedPercent: 95,
			hayPreparedTons: 38e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "low",
			levelLabel: "Бага эрсдэлтэй",
			score: 35,
			primaryType: "Цагаан зуд",
			snowDepthCm: 15,
			snowCoverPercent: 68,
			affectedSoumsCount: 1,
			totalSoums: 4,
			summary: "Газар тариалангийн бүс нутаг тул багсармал тэжээл, үр тарианы сүрэл хангалттай. Зуд болох эрсдэл бага, өвөлжилт хэвийн байна.",
			criticalWarning: null
		},
		herderAdvisories: {
			urgentActions: ["Тариалангийн талбайд мал орж хөлдсөн иш, сахалд гэмтэхээс болгоомжлох", "Эрчимжсэн сүүний үхрийн байрны дулааны горимыг +10°C-аас дээш барих"],
			grazingAdvice: "Бага зайд бэлчээрлүүлж, байран маллагааны горимд үе шаттай шилжүүлэх.",
			feedNutritionAdvice: "Дарш, сүрэл, баяжуулсан хивэгний хольцоор өдөрт 2 удаа тэжээх.",
			shelterColdProtection: "Фермийн байрыг автомат агааржуулалттайгаар дулаалах.",
			emergencyContacts: [{
				name: "Дархан ОБГ",
				phone: "7037-105"
			}]
		}
	},
	{
		id: "dornogovi",
		shapeName: "Dornogovi",
		iso: "MN-063",
		nameMn: "Дорноговь",
		nameEn: "Dornogovi",
		centerMn: "Сайншанд хот",
		centerCoordinates: [44.8844, 110.1367],
		region: "Төвийн бүс",
		areaKm2: 109472,
		population: 71200,
		livestock: {
			total: 289e4,
			horses: 195e3,
			cattle: 135e3,
			camels: 48500,
			sheep: 121e4,
			goats: 1301500,
			yearChangePercent: -3.5,
			densityPerSqKm: 26.4
		},
		pasture: {
			overloadRatio: 2.3,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: 1.6,
			fodderPreparedPercent: 78,
			hayPreparedTons: 46e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "high",
			levelLabel: "Их эрсдэлтэй",
			score: 75,
			primaryType: "Хар зуд",
			snowDepthCm: 11,
			snowCoverPercent: 55,
			affectedSoumsCount: 8,
			totalSoums: 14,
			summary: "Говийн сумдад цас багатай боловч хүйтэн жавар чангарч, худаг усны цэнэг багассан. Иххэт, Дэлгэрэх сумдад хатуу хөр тогтсон.",
			criticalWarning: "Хүйтэн салхи 18-24 м/с хүрч шуурах төлөвтэй тул говийн малчдад сэрэмжлүүлэг хүргэж байна."
		},
		herderAdvisories: {
			urgentActions: [
				"Салхи шуурганд мал уруудахаас хамгаалж хашааны хаалтыг бэхлэх",
				"Худаг уст цэгүүдийг өдөр бүр хяналтад авч бүлээн усаар услах",
				"Тэмээн сүргийг заг, харганатай нөмөр нутаг руу бэлчээх"
			],
			grazingAdvice: "Салхины сөрөг чиглэлд бэлчээхгүй байх, говийн сайр жалга дагуулах.",
			feedNutritionAdvice: "Тэжээлийн хужир, эрдэс чулуу, витаминт бэлдмэлүүдийг түлхүү өгөх.",
			shelterColdProtection: "Хашаа хорооны нөмрийг шороон далангаар давхар бэхжүүлэх.",
			emergencyContacts: [{
				name: "Дорноговь ОБГ",
				phone: "7052-105"
			}, {
				name: "Шуурхай алба",
				phone: "7052-2222"
			}]
		}
	},
	{
		id: "dornod",
		shapeName: "Dornod",
		iso: "MN-061",
		nameMn: "Дорнод",
		nameEn: "Dornod",
		centerMn: "Чойбалсан хот",
		centerCoordinates: [48.0717, 114.5389],
		region: "Зүүн бүс",
		areaKm2: 123597,
		population: 83500,
		livestock: {
			total: 312e4,
			horses: 334e3,
			cattle: 485e3,
			camels: 7100,
			sheep: 146e4,
			goats: 833900,
			yearChangePercent: -2.3,
			densityPerSqKm: 25.2
		},
		pasture: {
			overloadRatio: 1.6,
			status: "moderate_overload",
			statusLabel: "Даац 1-2 дахин хэтэрсэн",
			yieldCwtHa: 3.2,
			fodderPreparedPercent: 94,
			hayPreparedTons: 168e3,
			grazingPressure: "Дунд зэрэг"
		},
		dzudRisk: {
			level: "moderate",
			levelLabel: "Дунд эрсдэлтэй",
			score: 59,
			primaryType: "Цагаан зуд",
			snowDepthCm: 19,
			snowCoverPercent: 74,
			affectedSoumsCount: 7,
			totalSoums: 14,
			summary: "Дорнодын тал нутгаар цасны зузаан 15-25 см, шуурганы улмаас жалга судлаар хунгарласан. Матад, Халхгол сумдад хадлангийн нөөц сайн тул тэжээл хангалттай.",
			criticalWarning: null
		},
		herderAdvisories: {
			urgentActions: ["Тал хээрийн цасан шуурганы үед хүн мал төөлөхөөс сэргийлж холбоо харилцааг шалгах", "Хадлангийн өвсөө цасанд даруулахаас сэргийлж брезентээр хучих"],
			grazingAdvice: "Салхины хүч намжихыг хүлээж маллах, уудам талд малыг тарахгүй барих.",
			feedNutritionAdvice: "Дорнодын байгалийн соргог хадлангийн өвсөөр хангалттай тэжээх.",
			shelterColdProtection: "Хээрийн хашаанд хунгар тогтохоос сэргийлж салхин талын хамгаалалт хийх.",
			emergencyContacts: [{
				name: "Дорнод ОБГ",
				phone: "7058-105"
			}]
		}
	},
	{
		id: "dundgovi",
		shapeName: "Dundgovi",
		iso: "MN-059",
		nameMn: "Дундговь",
		nameEn: "Dundgovi",
		centerMn: "Мандалговь хот",
		centerCoordinates: [45.7625, 106.2708],
		region: "Төвийн бүс",
		areaKm2: 74690,
		population: 46800,
		livestock: {
			total: 356e4,
			horses: 215e3,
			cattle: 142e3,
			camels: 43e3,
			sheep: 172e4,
			goats: 144e4,
			yearChangePercent: -6.9,
			densityPerSqKm: 47.7
		},
		pasture: {
			overloadRatio: 3.1,
			status: "critical_overload",
			statusLabel: "Даац 3-аас дээш дахин хэтэрсэн",
			yieldCwtHa: 1.3,
			fodderPreparedPercent: 65,
			hayPreparedTons: 38e3,
			grazingPressure: "Нэн ачаалалтай"
		},
		dzudRisk: {
			level: "critical",
			levelLabel: "Нэн их эрсдэлтэй",
			score: 89,
			primaryType: "Хавсарсан зуд",
			snowDepthCm: 16,
			snowCoverPercent: 79,
			affectedSoumsCount: 12,
			totalSoums: 15,
			summary: "Зун намар гантай байсан бөгөөд өвлийн цас нэмэгдэж мөсөн бүрхүүл үүссэн. Өлзийт, Хулд, Эрдэнэдалай сумдад бэлчээрийн даац 3 дахин хэтэрсэн.",
			criticalWarning: "Өвс тэжээлийн улсын нөөцөөс яаралтай тусламжийн цуваа хүргэх шаардлагатай байна."
		},
		herderAdvisories: {
			urgentActions: [
				"Малчдын бүлгээрээ хамтран цас хунгар цэвэрлэх, сумын штабт тогтмол мэдээ өгөх",
				"Бэлчээрийн даац хэтэрсэн тул сул дорой малыг яаралтай борлуулж цөөрүүлэх",
				"Цасанд боогдсон гэр бүл, ахмад настнуудын эрүүл мэндийн байдлыг шалгах"
			],
			grazingAdvice: "Хөрлөсөн цастай газрыг алгасаж, өвсний орой цухуйсан шил даган бэлчээрлүүлэх.",
			feedNutritionAdvice: "Тэжээлийн будааг бүлээн усанд чанаж зутан байдлаар бог малд олгох.",
			shelterColdProtection: "Хашааны бууцыг хөрөөдөн дулаалга болгон өрөх.",
			emergencyContacts: [{
				name: "Дундговь ОБГ",
				phone: "7059-105"
			}, {
				name: "Шуурхай штаб",
				phone: "7059-2240"
			}]
		}
	},
	{
		id: "zavkhan",
		shapeName: "Zavkhan",
		iso: "MN-057",
		nameMn: "Завхан",
		nameEn: "Zavkhan",
		centerMn: "Улиастай хот",
		centerCoordinates: [47.7417, 96.8444],
		region: "Баруун бүс",
		areaKm2: 82456,
		population: 73200,
		livestock: {
			total: 367e4,
			horses: 245e3,
			cattle: 285e3,
			camels: 8200,
			sheep: 198e4,
			goats: 1151800,
			yearChangePercent: -5.6,
			densityPerSqKm: 44.5
		},
		pasture: {
			overloadRatio: 2.7,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: 2.2,
			fodderPreparedPercent: 79,
			hayPreparedTons: 86e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "critical",
			levelLabel: "Нэн их эрсдэлтэй",
			score: 92,
			primaryType: "Цагаан зуд",
			snowDepthCm: 38,
			snowCoverPercent: 92,
			affectedSoumsCount: 19,
			totalSoums: 24,
			summary: "Тосонцэнгэл, Тэс, Отгон сумдад температур -46°C хүрч улсын хамгийн хүйтэн цэг болов. Цасны зузаан дунджаар 35-50 см, хөдөөгийн замууд хаагдсан.",
			criticalWarning: "Уулын сумдад цасны нуранги үүсэх, хэт хүйтрэлт үргэлжлэх тул онцгой анхаарна уу."
		},
		herderAdvisories: {
			urgentActions: [
				"Хэт хүйтний өдрүүдэд малыг хотноос огт гаргахгүй тэжээлээр барих",
				"Малчдын гэр сууцны халаалт, түлээний нөөцийг найдвартай базаах",
				"Шинээр төллөх малд зориулсан дулаан пүнз, хашааг урьдчилан бэлтгэх"
			],
			grazingAdvice: "Цас 40 см-ээс давсан бүсэд бэлчээрлэх боломжгүй тул бүрэн тэжээлийн горимд шилжих.",
			feedNutritionAdvice: "Өдөрт 2-3 удаагийн давтамжтайгаар бүлээн шингэн тэжээл, витамин А, Д дусааж өгөх.",
			shelterColdProtection: "Хашаа хороонд нэмэлт сүрлэн дэвсгэр хийж, малын гэдэс хөрөхөөс хамгаалах.",
			emergencyContacts: [{
				name: "Завхан ОБГ",
				phone: "7038-105"
			}, {
				name: "Аймгийн Шуурхай",
				phone: "7038-2323"
			}]
		}
	},
	{
		id: "orkhon",
		shapeName: "Orkhon",
		iso: "MN-035",
		nameMn: "Орхон",
		nameEn: "Orkhon",
		centerMn: "Эрдэнэт хот",
		centerCoordinates: [49.0278, 104.0833],
		region: "Төвийн бүс",
		areaKm2: 844,
		population: 108e3,
		livestock: {
			total: 312e3,
			horses: 25e3,
			cattle: 58e3,
			camels: 100,
			sheep: 139e3,
			goats: 89900,
			yearChangePercent: +.4,
			densityPerSqKm: 369.7
		},
		pasture: {
			overloadRatio: 2.9,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: 3.4,
			fodderPreparedPercent: 92,
			hayPreparedTons: 22e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "low",
			levelLabel: "Бага эрсдэлтэй",
			score: 38,
			primaryType: "Цагаан зуд",
			snowDepthCm: 16,
			snowCoverPercent: 70,
			affectedSoumsCount: 1,
			totalSoums: 2,
			summary: "Газар нутаг багатай ч дэд бүтэц, төв суурин сайтай тул зудын эрсдэл харьцангуй доогуур байна.",
			criticalWarning: null
		},
		herderAdvisories: {
			urgentActions: ["Хот суурин газрын бэлчээрийн хэт төвлөрлийг сааруулах", "Үйлдвэрлэлийн хаягдал, тэжээлийн нийлүүлэлтийг сайжруулах"],
			grazingAdvice: "Хот орчмын заагласан бүсэд хуваарьтай бэлчээрлүүлэх.",
			feedNutritionAdvice: "Эрдэнэт хотын үйлдвэрүүдийн тэжээлийн нөөцийг ашиглах.",
			shelterColdProtection: "Хашаа хорооны цэвэрлэгээ, халдваргүйжүүлэлт хийх.",
			emergencyContacts: [{
				name: "Орхон ОБГ",
				phone: "7035-105"
			}]
		}
	},
	{
		id: "ovorkhangai",
		shapeName: "Övörkhangai",
		iso: "MN-055",
		nameMn: "Өвөрхангай",
		nameEn: "Ovorkhangai",
		centerMn: "Арвайхээр хот",
		centerCoordinates: [46.2639, 102.775],
		region: "Хангайн бүс",
		areaKm2: 62895,
		population: 116800,
		livestock: {
			total: 512e4,
			horses: 42e4,
			cattle: 51e4,
			camels: 24e3,
			sheep: 245e4,
			goats: 1716e3,
			yearChangePercent: -5.9,
			densityPerSqKm: 81.4
		},
		pasture: {
			overloadRatio: 3.3,
			status: "critical_overload",
			statusLabel: "Даац 3-аас дээш дахин хэтэрсэн",
			yieldCwtHa: 2,
			fodderPreparedPercent: 73,
			hayPreparedTons: 95e3,
			grazingPressure: "Нэн ачаалалтай"
		},
		dzudRisk: {
			level: "critical",
			levelLabel: "Нэн их эрсдэлтэй",
			score: 90,
			primaryType: "Хавсарсан зуд",
			snowDepthCm: 29,
			snowCoverPercent: 88,
			affectedSoumsCount: 16,
			totalSoums: 19,
			summary: "Хайрхандулаан, Баруунбаян-Улаан, Богд, Бат-Өлзий сумдад цасны зузаан 30-40 см хүрч нягтарсан. Бэлчээрийн даац онцгой хэтэрсэн тул малын хорогдол нэмэгдэх төлөвтэй.",
			criticalWarning: "Хангайн өндөр уулын бүсэд малчин өрхүүд цасанд тусгаарлагдаад байна."
		},
		herderAdvisories: {
			urgentActions: [
				"Тусгаарлагдсан өрхүүдийн замыг зам тээврийн техникээр нээхэд мэдээлэл өгөх",
				"Сумын төвийн өвсний нөөцийг хуваарилан татан авах",
				"Эх мал, төллөх богийг дулаан хашаанд тусад нь байршуулах"
			],
			grazingAdvice: "Уулын цас ихтэй энгэрээс зайлсхийж, зөвхөн цэвэрлэсэн зам харгуйгаар ойрын зайд бэлчээх.",
			feedNutritionAdvice: "Эрдэс хүчит тэжээл, шар сүүний зутан өгч дархлааг дэмжих.",
			shelterColdProtection: "Хашаа хорооны шалыг зузаан хоргол бууцаар хучих.",
			emergencyContacts: [{
				name: "Өвөрхангай ОБГ",
				phone: "7032-105"
			}, {
				name: "Аймгийн ХХААГ",
				phone: "7032-2432"
			}]
		}
	},
	{
		id: "omnogovi",
		shapeName: "Ömnögovi",
		iso: "MN-053",
		nameMn: "Өмнөговь",
		nameEn: "Omnogovi",
		centerMn: "Даланзадгад хот",
		centerCoordinates: [43.5708, 104.425],
		region: "Төвийн бүс",
		areaKm2: 165380,
		population: 72400,
		livestock: {
			total: 268e4,
			horses: 122e3,
			cattle: 68e3,
			camels: 148e3,
			sheep: 82e4,
			goats: 1522e3,
			yearChangePercent: -3.8,
			densityPerSqKm: 16.2
		},
		pasture: {
			overloadRatio: 2.5,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: .9,
			fodderPreparedPercent: 81,
			hayPreparedTons: 32e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "high",
			levelLabel: "Их эрсдэлтэй",
			score: 77,
			primaryType: "Хар зуд",
			snowDepthCm: 9,
			snowCoverPercent: 42,
			affectedSoumsCount: 10,
			totalSoums: 15,
			summary: "Цас бараг ороогүй боловч өвөл зуны хур тунадас дутагдсанаас бэлчээр үгүй болж, худаг ус хөлдсөн хар зудын нөхцөл зонхилж байна.",
			criticalWarning: "Гурвантэс, Ноён, Сэврэй сумдад салхины хурд 25 м/с хүрч улаан шороон ба хүйтэн шуурга аюул тарьж болзошгүй."
		},
		herderAdvisories: {
			urgentActions: [
				"Шороон ба цасан шуурганы үед тэмээн сүргийг хэвтэш сайтай хоолой руу буулгах",
				"Усны гүний худаг, нарны насосны хөлдөлтөөс сэргийлж дулаалгын бүрхүүл хийх",
				"Тэжээл дутагдсан ямаан сүрэгт эрдэс витамины нэмэгдэл олгох"
			],
			grazingAdvice: "Говийн уулсын нөмөр нөөлөг, заган төгөлд тогтоон бэлчээрлүүлэх.",
			feedNutritionAdvice: "Шар буурцагны шахдас, тэжээлийн буудайг өдөрт бага тунгаар давтамжтай өгөх.",
			shelterColdProtection: "Хашааг чулуу, шороон далангаар давхарлан салхинаас халхлах.",
			emergencyContacts: [{
				name: "Өмнөговь ОБГ",
				phone: "7053-105"
			}, {
				name: "Шуурхай алба",
				phone: "7053-2222"
			}]
		}
	},
	{
		id: "sukhbaatar",
		shapeName: "Sükhbaatar",
		iso: "MN-051",
		nameMn: "Сүхбаатар",
		nameEn: "Sukhbaatar",
		centerMn: "Баруун-Урт хот",
		centerCoordinates: [46.6806, 113.2806],
		region: "Зүүн бүс",
		areaKm2: 82287,
		population: 64100,
		livestock: {
			total: 442e4,
			horses: 48e4,
			cattle: 41e4,
			camels: 14200,
			sheep: 201e4,
			goats: 1505800,
			yearChangePercent: -8.5,
			densityPerSqKm: 53.7
		},
		pasture: {
			overloadRatio: 3.5,
			status: "critical_overload",
			statusLabel: "Даац 3-аас дээш дахин хэтэрсэн",
			yieldCwtHa: 1.8,
			fodderPreparedPercent: 66,
			hayPreparedTons: 72e3,
			grazingPressure: "Нэн ачаалалтай"
		},
		dzudRisk: {
			level: "critical",
			levelLabel: "Нэн их эрсдэлтэй",
			score: 95,
			primaryType: "Төмөр зуд",
			snowDepthCm: 34,
			snowCoverPercent: 95,
			affectedSoumsCount: 13,
			totalSoums: 13,
			summary: "Аймгийн нийт нутгаар цас орж хайлсны дараа огцом хүйтэрснээс 2-5 см зузаан мөсөн бүрхүүл тогтож, мал өвсөө идэж чадахгүй төмөр зуд үүссэн. 13 сум бүгд нэрвэгдээд байна.",
			criticalWarning: "Онцгой гамшгийн нөхцөл байдал үүссэн тул төрийн нөөцөөс өвс тэжээл, шатахууны тусламж тасралтгүй шаардлагатай."
		},
		herderAdvisories: {
			urgentActions: [
				"Мөсөн бүрхүүл хагалах техник (трактор, чирэгч)-ээр бэлчээрийн цасыг сарниулах",
				"Хөл нь халцарсан малд антибиотик, шархны тос түрхэх",
				"Бүх бог малыг өдөр бүр 100% хашаанд нь тэжээх горимд шилжүүлэх"
			],
			grazingAdvice: "Мөстсөн бэлчээрт мал бэлчээхийг зогсоож, хөл доройтохоос сэргийлэх.",
			feedNutritionAdvice: "Эрдэс хүчит тэжээл, ногоон тэжээл, зутан тэжээлийг өдөрт 3 удаа өгөх.",
			shelterColdProtection: "Хашааны мөсийг ховхолж хуурай бууц, модны үртэс дэвсэх.",
			emergencyContacts: [{
				name: "Сүхбаатар ОБГ",
				phone: "7051-105"
			}, {
				name: "Гамшгийн шуурхай штаб",
				phone: "7051-2424"
			}]
		}
	},
	{
		id: "selenge",
		shapeName: "Selenge",
		iso: "MN-049",
		nameMn: "Сэлэнгэ",
		nameEn: "Selenge",
		centerMn: "Сүхбаатар хот",
		centerCoordinates: [50.2314, 106.2083],
		region: "Төвийн бүс",
		areaKm2: 41153,
		population: 109200,
		livestock: {
			total: 198e4,
			horses: 148e3,
			cattle: 312e3,
			camels: 700,
			sheep: 95e4,
			goats: 569300,
			yearChangePercent: +.8,
			densityPerSqKm: 48.1
		},
		pasture: {
			overloadRatio: 1.3,
			status: "moderate_overload",
			statusLabel: "Даац 1-2 дахин хэтэрсэн",
			yieldCwtHa: 4.2,
			fodderPreparedPercent: 96,
			hayPreparedTons: 195e3,
			grazingPressure: "Хэвийн"
		},
		dzudRisk: {
			level: "low",
			levelLabel: "Бага эрсдэлтэй",
			score: 28,
			primaryType: "Цагаан зуд",
			snowDepthCm: 14,
			snowCoverPercent: 62,
			affectedSoumsCount: 2,
			totalSoums: 17,
			summary: "Атрын нутаг тул ургац арвин, өвс тэжээлийн нөөц улсдаа хамгийн өндөр. Өвөлжилт тогтвортой, эрсдэл багатай байна.",
			criticalWarning: null
		},
		herderAdvisories: {
			urgentActions: ["Орон нутгийн тэжээлийн баазаас бусад хөрш аймгуудад тэжээл экспортлох бэлтгэл хангах", "Талбайн сүрлийг ариутган малын тэжээлд бэлтгэх"],
			grazingAdvice: "Ойн захын сөөгт бэлчээр болон таримал талбайд тогтмол маллах.",
			feedNutritionAdvice: "Үр тарианы баяжуулсан хивэг, шар буурцагны шахдас ашиглах.",
			shelterColdProtection: "Өвөлжөөний цэвэрлэгээг сайжруулж салхинаас сэргийлэх.",
			emergencyContacts: [{
				name: "Сэлэнгэ ОБГ",
				phone: "7036-105"
			}]
		}
	},
	{
		id: "tov",
		shapeName: "Töv",
		iso: "MN-047",
		nameMn: "Төв",
		nameEn: "Tov",
		centerMn: "Зуунмод хот",
		centerCoordinates: [47.7083, 106.9583],
		region: "Төвийн бүс",
		areaKm2: 74042,
		population: 93400,
		livestock: {
			total: 521e4,
			horses: 512e3,
			cattle: 54e4,
			camels: 4800,
			sheep: 265e4,
			goats: 1503200,
			yearChangePercent: -4.1,
			densityPerSqKm: 70.4
		},
		pasture: {
			overloadRatio: 2.6,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: 2.8,
			fodderPreparedPercent: 84,
			hayPreparedTons: 155e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "high",
			levelLabel: "Их эрсдэлтэй",
			score: 79,
			primaryType: "Цагаан зуд",
			snowDepthCm: 26,
			snowCoverPercent: 84,
			affectedSoumsCount: 18,
			totalSoums: 27,
			summary: "Эрдэнэсант, Өндөрширээт, Бүрэн, Баян-Өнжүүл сумдад цас их орж хунгарласан. Нийслэлд ойр боловч урд болон баруун сумдад мал өвөлжилт хүндэрч байна.",
			criticalWarning: "Урд талын сумдад цасан шуурга дахин давтагдах эрсдэл өндөр байна."
		},
		herderAdvisories: {
			urgentActions: [
				"Цасны зузаан 30 см-ээс давсан сумдын малчдад туувар, отор хийхгүй байхыг сануулах",
				"Улаанбаатар хотоос тэжээл татан авах логистикийн ажлыг зохион байгуулах",
				"Бог малын хэвтэш бууцыг хөлдөхөөс сэргийлж өдөр бүр сэврээх"
			],
			grazingAdvice: "Энгэр ээвэр газраар нарны илчтэй цагт 3-4 цаг бэлчээрлүүлэх.",
			feedNutritionAdvice: "Ногоон тэжээлийн боодлыг чанасан багсармал хивэгтэй хольж өгөх.",
			shelterColdProtection: "Хашааныхаа салхин талыг төмөр эсвэл мод хэрэглэн нөмөрлөх.",
			emergencyContacts: [{
				name: "Төв аймаг ОБГ",
				phone: "7027-105"
			}, {
				name: "Шуурхай алба",
				phone: "7027-2222"
			}]
		}
	},
	{
		id: "uvs",
		shapeName: "Uvs",
		iso: "MN-046",
		nameMn: "Увс",
		nameEn: "Uvs",
		centerMn: "Улаангом хот",
		centerCoordinates: [49.9833, 92.0667],
		region: "Баруун бүс",
		areaKm2: 69585,
		population: 85200,
		livestock: {
			total: 358e4,
			horses: 198e3,
			cattle: 245e3,
			camels: 21500,
			sheep: 182e4,
			goats: 1295500,
			yearChangePercent: -6.4,
			densityPerSqKm: 51.4
		},
		pasture: {
			overloadRatio: 2.9,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: 1.9,
			fodderPreparedPercent: 77,
			hayPreparedTons: 82e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "critical",
			levelLabel: "Нэн их эрсдэлтэй",
			score: 94,
			primaryType: "Хүйтний зуд",
			snowDepthCm: 36,
			snowCoverPercent: 91,
			affectedSoumsCount: 16,
			totalSoums: 19,
			summary: "Увс нуурын хотгороор шөнөдөө -44°C-аас -49°C хүрч хэт хүйтрэлт 3 долоо хоног үргэлжилж байна. Малчид бэлчээрт гарахад мал амьсгал нь боогдох эрсдэлтэй.",
			criticalWarning: "Зүүнговь, Баруунтуруун, Малчин, Хяргас сумдад хүйтний зуд туйлдаа хүрсэн."
		},
		herderAdvisories: {
			urgentActions: [
				"Хэт хүйтэнд малыг задгай бэлчээрт огт гаргахгүй, хороонд нь нөмрөгтэй тэжээх",
				"Бүлээн ус, халуун зуурмагаар ундаалж биеийн дулааныг хадгалах",
				"Малчин өрхүүд ганцаарчилж хол явахгүй, холбоотой байх"
			],
			grazingAdvice: "Жавартай өдөр зөвхөн үд дунд салхигүй нөмөрт 1-2 цаг агаарлуулах.",
			feedNutritionAdvice: "Шар тос, өөх тосны хольцтой хүчит тэжээл бага тунгаар бодод өгөх.",
			shelterColdProtection: "Хашаа саравчинд эсгий хөшиг давхарлан углаж, цонх завсрыг бөглөх.",
			emergencyContacts: [{
				name: "Увс ОБГ",
				phone: "7045-105"
			}, {
				name: "Аймгийн Шуурхай",
				phone: "7045-2121"
			}]
		}
	},
	{
		id: "khovd",
		shapeName: "Khovd",
		iso: "MN-043",
		nameMn: "Ховд",
		nameEn: "Khovd",
		centerMn: "Ховд хот",
		centerCoordinates: [48.0056, 91.6417],
		region: "Баруун бүс",
		areaKm2: 76060,
		population: 90200,
		livestock: {
			total: 351e4,
			horses: 165e3,
			cattle: 21e4,
			camels: 28e3,
			sheep: 154e4,
			goats: 1567e3,
			yearChangePercent: -3.2,
			densityPerSqKm: 46.1
		},
		pasture: {
			overloadRatio: 2.2,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: 2.3,
			fodderPreparedPercent: 83,
			hayPreparedTons: 76e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "high",
			levelLabel: "Их эрсдэлтэй",
			score: 74,
			primaryType: "Хавсарсан зуд",
			snowDepthCm: 21,
			snowCoverPercent: 77,
			affectedSoumsCount: 11,
			totalSoums: 17,
			summary: "Алтайн нурууны ар өвөрөөр салхи хүчтэй, зарим хэсгээр цас нягтарсан. Чандмань, Дарви, Зэрэг сумдад бэлчээр даац хэтэрсэн.",
			criticalWarning: "Хүйтэн салхи Алтайн даваагаар 20-25 м/с хүрч шуурч болзошгүй."
		},
		herderAdvisories: {
			urgentActions: ["Уулын даваа цасанд хаагдахаас урьдчилан суурьшлын бүстэй холбоо тогтоох", "Мал амьтны хороог тогтмол цэвэрлэж мөс арилгах"],
			grazingAdvice: "Алтайн уулсын нөмөр өвөр энгэрийг түшин бэлчээрлүүлэх.",
			feedNutritionAdvice: "Тэжээлийн багсармал, давс, хужирын нөөцийг хуваарийн дагуу өгөх.",
			shelterColdProtection: "Хашааны салхин талд чулуун босго, шавар хана босгох.",
			emergencyContacts: [{
				name: "Ховд ОБГ",
				phone: "7043-105"
			}]
		}
	},
	{
		id: "hovsgel",
		shapeName: "Hovsgel",
		iso: "MN-041",
		nameMn: "Хөвсгөл",
		nameEn: "Khovsgol",
		centerMn: "Мөрөн хот",
		centerCoordinates: [49.6342, 100.1583],
		region: "Хангайн бүс",
		areaKm2: 100629,
		population: 136200,
		livestock: {
			total: 624e4,
			horses: 435e3,
			cattle: 885e3,
			camels: 2800,
			sheep: 312e4,
			goats: 1797200,
			yearChangePercent: -4.3,
			densityPerSqKm: 62
		},
		pasture: {
			overloadRatio: 2.7,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: 3.5,
			fodderPreparedPercent: 87,
			hayPreparedTons: 182e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "critical",
			levelLabel: "Нэн их эрсдэлтэй",
			score: 87,
			primaryType: "Цагаан зуд",
			snowDepthCm: 35,
			snowCoverPercent: 93,
			affectedSoumsCount: 18,
			totalSoums: 23,
			summary: "Цагааннуур, Улаан-Уул, Ренчинлхүмбэ, Баянзүрх сумдад Дархадын хотгорын хүйтэн -45°C давж, цасны зузаан 40-60 см хүрсэн. Тайгын зам тээвэр саатсан.",
			criticalWarning: "Дархадын хотгорт цасны зузаан рекорд хэмжээнд хүрсэн тул мал бэлчээрлэх боломж бүрэн хаагдсан."
		},
		herderAdvisories: {
			urgentActions: [
				"Цасанд суусан малчин өрхүүдэд цасан зам гаргагч техник илгээх хүсэлт өгөх",
				"Тайгын болон уулын бүсийн малыг дулаан пүнз, баазанд оруулж байнгын тэжээлд шилжүүлэх",
				"Цаа бугын бэлчээрийн цасны нягтаршлыг шалгах"
			],
			grazingAdvice: "Цас 40 см-ээс дээш зузаантай тул бэлчээрт гаргахгүй, хашаандаа тэжээх.",
			feedNutritionAdvice: "Сайн чанарын хадлан, сүрэл, чанасан хивэгний зутан өдөрт 2-3 удаа өгөх.",
			shelterColdProtection: "Модон хороог хуурай өвсөөр чигжиж дулаалгын бүрээс давхар татах.",
			emergencyContacts: [{
				name: "Хөвсгөл ОБГ",
				phone: "7038-105"
			}, {
				name: "Шуурхай алба",
				phone: "7038-2222"
			}]
		}
	},
	{
		id: "khentii",
		shapeName: "Khentii",
		iso: "MN-039",
		nameMn: "Хэнтий",
		nameEn: "Khentii",
		centerMn: "Чингис хот",
		centerCoordinates: [47.3167, 110.6556],
		region: "Зүүн бүс",
		areaKm2: 80325,
		population: 79500,
		livestock: {
			total: 489e4,
			horses: 482e3,
			cattle: 52e4,
			camels: 5100,
			sheep: 251e4,
			goats: 1372900,
			yearChangePercent: -7.2,
			densityPerSqKm: 60.9
		},
		pasture: {
			overloadRatio: 3.2,
			status: "critical_overload",
			statusLabel: "Даац 3-аас дээш дахин хэтэрсэн",
			yieldCwtHa: 2.7,
			fodderPreparedPercent: 71,
			hayPreparedTons: 11e4,
			grazingPressure: "Нэн ачаалалтай"
		},
		dzudRisk: {
			level: "critical",
			levelLabel: "Нэн их эрсдэлтэй",
			score: 93,
			primaryType: "Төмөр зуд",
			snowDepthCm: 31,
			snowCoverPercent: 90,
			affectedSoumsCount: 15,
			totalSoums: 18,
			summary: "Батноров, Биндэр, Норовлин, Дадал сумдад цас орж хайлсны дараа мөсөн бүрхүүл үүсэж төмөр зуд нүүрлэсэн. Мал бэлчээрт явахад хөл гэмтэж, өвс идэх боломжгүй болсон.",
			criticalWarning: "Хэнтийн зүүн хойд сумдад төмөр зудын улмаас мал тураалд орж эхэлсэн тул нэн яаралтай тэжээлийн дэмжлэг хэрэгтэй."
		},
		herderAdvisories: {
			urgentActions: [
				"Мөсөн бүрхүүлийг чирэгч самбар, модон булгаар няцлан хуулах",
				"Хөл нь шалбарсан бог малыг тусад нь ялгаж дулаан хашаанд тэжээх",
				"Улсын болон аймгийн өвс тэжээлийн цэгээс хуваарилалт авах"
			],
			grazingAdvice: "Мөстэй бэлчээрт бэлчээрлүүлэхгүй, цасгүй эсвэл няцарсан талбайд цөөн цагаар гаргах.",
			feedNutritionAdvice: "Шим тэжээлт багсармал, шар тос, эрдэс хужирыг тогтмол өгөх.",
			shelterColdProtection: "Хашаа хорооны мөсийг арилгаж, хуурай дэвсгэр дэвсэх.",
			emergencyContacts: [{
				name: "Хэнтий ОБГ",
				phone: "7056-105"
			}, {
				name: "Онцгой комисс",
				phone: "7056-2323"
			}]
		}
	},
	{
		id: "ulaanbaatar",
		shapeName: "Ulaanbaatar",
		iso: "MN-1",
		nameMn: "Улаанбаатар хот",
		nameEn: "Ulaanbaatar",
		centerMn: "Сүхбаатарын талбай",
		centerCoordinates: [47.9188, 106.9176],
		region: "Нийслэл",
		areaKm2: 4704,
		population: 169e4,
		livestock: {
			total: 395e3,
			horses: 38e3,
			cattle: 65e3,
			camels: 300,
			sheep: 172e3,
			goats: 119700,
			yearChangePercent: -1.5,
			densityPerSqKm: 83.9
		},
		pasture: {
			overloadRatio: 2.4,
			status: "high_overload",
			statusLabel: "Даац 2-3 дахин хэтэрсэн",
			yieldCwtHa: 2.2,
			fodderPreparedPercent: 92,
			hayPreparedTons: 28e3,
			grazingPressure: "Ачаалал ихтэй"
		},
		dzudRisk: {
			level: "low",
			levelLabel: "Бага эрсдэлтэй",
			score: 30,
			primaryType: "Цагаан зуд",
			snowDepthCm: 15,
			snowCoverPercent: 65,
			affectedSoumsCount: 2,
			totalSoums: 9,
			summary: "Багануур, Багахангай, Налайх дүүргийн мал бүхий өрхүүдийн өвөлжилт тогтвортой. Нийслэлийн төвд дэд бүтэц, хангамж найдвартай.",
			criticalWarning: null
		},
		herderAdvisories: {
			urgentActions: ["Алслагдсан дүүргүүдийн замын халтиргаа гулгааг арилгах", "Байран маллагааны горимд бүрэн шилжих"],
			grazingAdvice: "Хот орчмын хамгаалалтын бүсэд бэлчээрлэхгүй байх.",
			feedNutritionAdvice: "Нийслэлийн тэжээлийн худалдааны цэгүүдээс бэлэн холимог тэжээл авах.",
			shelterColdProtection: "Өвөлжөөний дулаалгыг шалгах.",
			emergencyContacts: [{
				name: "НОБГ шуурхай утас",
				phone: "105"
			}, {
				name: "Нийслэлийн ХХААГ",
				phone: "7011-2290"
			}]
		}
	}
];
export const NATIONAL_TOTALS = {
	totalLivestock: 647e5,
	totalHorses: 4836e3,
	totalCattle: 538e4,
	totalCamels: 473e3,
	totalSheep: 2942e4,
	totalGoats: 24591e3,
	criticalAimagsCount: 8,
	highRiskAimagsCount: 5,
	moderateRiskAimagsCount: 5,
	lowRiskAimagsCount: 4,
	averagePastureOverload: 2.45,
	averageSnowCoverPercent: 74
};

//# sourceMappingURL=data:application/json;base64,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QUNaLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIseUJBQXlCO0FBQzNCIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbImFpbWFnRGF0YS50cyJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBaW1hZ0luZm8gfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBBSU1BR1NfREFUQTogQWltYWdJbmZvW10gPSBbXG4gIHtcbiAgICBpZDogJ2Fya2hhbmdhaScsXG4gICAgc2hhcGVOYW1lOiAnQXJraGFuZ2FpJyxcbiAgICBpc286ICdNTi0wNzMnLFxuICAgIG5hbWVNbjogJ9CQ0YDRhdCw0L3Qs9Cw0LknLFxuICAgIG5hbWVFbjogJ0Fya2hhbmdhaScsXG4gICAgY2VudGVyTW46ICfQptGN0YbRjdGA0LvRjdCzINGF0L7RgicsXG4gICAgY2VudGVyQ29vcmRpbmF0ZXM6IFs0Ny40NzY0LCAxMDEuNDU0Ml0sXG4gICAgcmVnaW9uOiAn0KXQsNC90LPQsNC50L0g0LHSr9GBJyxcbiAgICBhcmVhS20yOiA1NTMxNCxcbiAgICBwb3B1bGF0aW9uOiA5NTMwMCxcbiAgICBsaXZlc3RvY2s6IHtcbiAgICAgIHRvdGFsOiA1ODQwMjAwLFxuICAgICAgaG9yc2VzOiA0NDIxMDAsXG4gICAgICBjYXR0bGU6IDc5MjQwMCxcbiAgICAgIGNhbWVsczogMjEwMCxcbiAgICAgIHNoZWVwOiAyOTgxMzAwLFxuICAgICAgZ29hdHM6IDE2MjIzMDAsXG4gICAgICB5ZWFyQ2hhbmdlUGVyY2VudDogLTQuOCxcbiAgICAgIGRlbnNpdHlQZXJTcUttOiAxMDUuNixcbiAgICB9LFxuICAgIHBhc3R1cmU6IHtcbiAgICAgIG92ZXJsb2FkUmF0aW86IDIuOCxcbiAgICAgIHN0YXR1czogJ2hpZ2hfb3ZlcmxvYWQnLFxuICAgICAgc3RhdHVzTGFiZWw6ICfQlNCw0LDRhiAyLTMg0LTQsNGF0LjQvSDRhdGN0YLRjdGA0YHRjdC9JyxcbiAgICAgIHlpZWxkQ3d0SGE6IDIuNixcbiAgICAgIGZvZGRlclByZXBhcmVkUGVyY2VudDogODIsXG4gICAgICBoYXlQcmVwYXJlZFRvbnM6IDExMjAwMCxcbiAgICAgIGdyYXppbmdQcmVzc3VyZTogJ9CQ0YfQsNCw0LvQsNC7INC40YXRgtGN0LknLFxuICAgIH0sXG4gICAgZHp1ZFJpc2s6IHtcbiAgICAgIGxldmVsOiAnY3JpdGljYWwnLFxuICAgICAgbGV2ZWxMYWJlbDogJ9Cd0Y3QvSDQuNGFINGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogODgsXG4gICAgICBwcmltYXJ5VHlwZTogJ9Cm0LDQs9Cw0LDQvSDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDMyLFxuICAgICAgc25vd0NvdmVyUGVyY2VudDogODksXG4gICAgICBhZmZlY3RlZFNvdW1zQ291bnQ6IDE2LFxuICAgICAgdG90YWxTb3VtczogMTksXG4gICAgICBzdW1tYXJ5OiAn0KXQsNC90LPQsNC50L0g0L3Rg9GA0YPRg9C90Ysg0LTQsNCz0YPRgyDRhtCw0YHQvdGLINC30YPQt9Cw0LDQvSAyNS00NSDRgdC8INGF0q/RgNGHLCDQvNCw0Lsg0LHRjdC70YfRjdGN0YDQu9GN0YUg0LHQvtC70L7QvNC2INGF0YPQvNC40LPQtNGB0LDQvS4g0K3RgNC00Y3QvdGN0LHRg9C70LPQsNC9LCDQp9GD0LvRg9GD0YIsINCi0LDRgNC40LDRgiDRgdGD0LzQtNCw0LQg0YbQsNGBINC90Y/Qs9GC0LDRgNGHINGC06nQvNOp0YDQu9Op0LMg0YXQsNGC0YPRgyDRhdGN0LIg0q/Sr9GB0YHRjdC9LicsXG4gICAgICBjcml0aWNhbFdhcm5pbmc6ICfQptCw0YHQsNC9INGF0YPQvdCz0LDRgNGCINCx0L7QvtCz0LTRgdC+0L0g0YHRg9C80LTRi9C9INOp0LLRgSDRgtGN0LbRjdGN0LvQuNC50L0g0YLRjdGN0LLRjdGA0LvRjdC70YLRjdC0INGF0q/QvdC00YDRjdC7INKv0q/RgdGB0Y3QvS4g0JzQsNC70YfQtNGL0LMg0L7RgtC+0YAg0L3Sr9Kv0LTQu9GN0Y3RgSDQt9Cw0LnQu9GB0YXQuNC50YXQuNC50LMg0LDQvdGF0LDQsNGA0YPRg9C70LYg0LHQsNC50L3QsC4nLFxuICAgIH0sXG4gICAgaGVyZGVyQWR2aXNvcmllczoge1xuICAgICAgdXJnZW50QWN0aW9uczogW1xuICAgICAgICAn0KbQsNGB0LDQvSDRhdGD0L3Qs9Cw0YAg0LjRhdGC0Y3QuSDRg9GD0LvRi9C9INCx0Y3Quywg0LbQsNC70LPQsNC90LDQsNGBINC80LDQu9GL0LMg0L3TqdC806nRgCDQvdOp06nQu9Op0LMg0Y3QvdCz0Y3RgCDRgNKv0q8g0YjQuNC70LbSr9Kv0LvRjdGFJyxcbiAgICAgICAgJ9Cd0Y/Qu9GFINGC06nQuywg0YLRg9GA0LDQvdCz0Lgg0YHRg9Cy0LDQuSDQvNCw0LvRi9CzINOp0LTTqdGAINCx0q/RgCDQvdGN0LzRjdCz0LTRjdC7INGD0YPRgNCw0LMsINGF0YPQttC40YAg0LHSr9GF0LjQuSDRhdKv0YfQuNGCINGC0Y3QttGN0Y3Qu9GN0Y3RgCDRgtGN0LbRjdGN0YUnLFxuICAgICAgICAn0KbQsNGBINGF06nQu9C006nQtiDQvNOp0YHRgtGB06nQvSDRgtGD0Lsg0LzQsNC70YvQvSDRgtGD0YPRgNCw0Lkg0YXTqdC70LTTqdGF06nTqdGBINGB0Y3RgNCz0LjQudC70LYg0YXQsNGI0LDQsNC90Ysg0LHRg9GD0YbRi9CzINGF0YPRg9GA0LDQuSDQsdCw0LnQu9Cz0LDRhScsXG4gICAgICBdLFxuICAgICAgZ3JhemluZ0FkdmljZTogJ9Oo0LTRgNC40LnQvSDQtNGD0LvQsNCw0L0g0YbQsNCzINCx0YPRjtGDIDExOjAwLTE2OjAwINGF0L7QvtGA0L7QvdC0INC+0LnRgNGL0L0g0Y3QvdCz0Y3RgCDQsdGN0LvRh9GN0Y3RgNGCINCz0LDRgNCz0LDQtiwg0YXSr9C50YLRjdC9INC20LDQstCw0YAg0Y3RhdC70Y3RhdGN0Y3RgSDTqdC80L3TqSDRhdC+0YLQu9GD0YPQu9Cw0YUuJyxcbiAgICAgIGZlZWROdXRyaXRpb25BZHZpY2U6ICfQkdC+0L7QtNC70YvQvSDTqdCy0YHQuNC50LMg0LbQuNC20LjQs9C70Y3QvSDRg9GD0YDQsNCz0LvQsNCzINGF0LjQstGN0LMsINC+0LLRjNGR0L7RgdC90Ysg0YXQsNC70YPRg9C9INC30YPRg9GA0LzQsNCz0YLQsNC5INGF0L7Qu9GM0LYgMSDQsdC+0LTQvtC0INOp0LTTqdGA0YIgMi0zINC60LMg0L3RjdC80Y3Qu9GC0Y3RjdGAINOp0LPTqdGFLicsXG4gICAgICBzaGVsdGVyQ29sZFByb3RlY3Rpb246ICfQpdCw0YjQsNCwINGF0L7RgNC+0L7QvdGLINGF0L7QudC0INGB0LDQu9GF0LjQvdGLINGF0LDQsNC70YLRi9CzINC30YPQt9Cw0LDQu9C2LCDQtNGD0LvQsNCw0LvQs9GL0L0g0Y3RgdCz0LjQuSDQvdOp0LzRgNOp0LMg0LHRjdC70YLQs9GN0YUuJyxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBbXG4gICAgICAgIHsgbmFtZTogJ9CQ0YDRhdCw0L3Qs9Cw0Lkg0J7QkdCTINC20LjQttKv0q/RgCcsIHBob25lOiAnNzAzMy0xMDUnIH0sXG4gICAgICAgIHsgbmFtZTogJ9CQ0LnQvNCz0LjQudC9INCl0KXQkNCQ0JMnLCBwaG9uZTogJzcwMzMtMjg0OScgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnYmF5YW4tdWxnaWknLFxuICAgIHNoYXBlTmFtZTogJ0JheWFuLcOWbGdpaScsXG4gICAgaXNvOiAnTU4tMDcxJyxcbiAgICBuYW1lTW46ICfQkdCw0Y/QvS3TqNC70LPQuNC5JyxcbiAgICBuYW1lRW46ICdCYXlhbi1VbGdpaScsXG4gICAgY2VudGVyTW46ICfTqNC70LPQuNC5INGF0L7RgicsXG4gICAgY2VudGVyQ29vcmRpbmF0ZXM6IFs0OC45NzExLCA4OS45NjIyXSxcbiAgICByZWdpb246ICfQkdCw0YDRg9GD0L0g0LHSr9GBJyxcbiAgICBhcmVhS20yOiA0NTcwNSxcbiAgICBwb3B1bGF0aW9uOiAxMTQ1MDAsXG4gICAgbGl2ZXN0b2NrOiB7XG4gICAgICB0b3RhbDogMjQyMDEwMCxcbiAgICAgIGhvcnNlczogMTQ1MDAwLFxuICAgICAgY2F0dGxlOiAxODgwMDAsXG4gICAgICBjYW1lbHM6IDcyMDAsXG4gICAgICBzaGVlcDogMTEyMDAwMCxcbiAgICAgIGdvYXRzOiA5NTk5MDAsXG4gICAgICB5ZWFyQ2hhbmdlUGVyY2VudDogLTIuMSxcbiAgICAgIGRlbnNpdHlQZXJTcUttOiA1Mi45LFxuICAgIH0sXG4gICAgcGFzdHVyZToge1xuICAgICAgb3ZlcmxvYWRSYXRpbzogMS43LFxuICAgICAgc3RhdHVzOiAnbW9kZXJhdGVfb3ZlcmxvYWQnLFxuICAgICAgc3RhdHVzTGFiZWw6ICfQlNCw0LDRhiAxLTIg0LTQsNGF0LjQvSDRhdGN0YLRjdGA0YHRjdC9JyxcbiAgICAgIHlpZWxkQ3d0SGE6IDIuMSxcbiAgICAgIGZvZGRlclByZXBhcmVkUGVyY2VudDogODgsXG4gICAgICBoYXlQcmVwYXJlZFRvbnM6IDc4MDAwLFxuICAgICAgZ3JhemluZ1ByZXNzdXJlOiAn0JTRg9C90LQg0LfRjdGA0Y3QsycsXG4gICAgfSxcbiAgICBkenVkUmlzazoge1xuICAgICAgbGV2ZWw6ICdoaWdoJyxcbiAgICAgIGxldmVsTGFiZWw6ICfQmNGFINGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogNzIsXG4gICAgICBwcmltYXJ5VHlwZTogJ9Cl0q/QudGC0L3QuNC5INC30YPQtCcsXG4gICAgICBzbm93RGVwdGhDbTogMjIsXG4gICAgICBzbm93Q292ZXJQZXJjZW50OiA3OCxcbiAgICAgIGFmZmVjdGVkU291bXNDb3VudDogOSxcbiAgICAgIHRvdGFsU291bXM6IDEzLFxuICAgICAgc3VtbWFyeTogJ9CQ0LvRgtCw0LnQvSDTqdC90LTTqdGAINGD0YPQu9GL0L0g0LHSr9GB0Y3QtCDRiNOp0L3QuNC50L0g0YLQtdC80L/QtdGA0LDRgtGD0YAgLTM4wrBDINGF0q/RgNGHLCDRhdOp0L3QtNC40Lkg0YXQvtC+0LvQvtC50LPQvtC+0YAg0YbQsNGBINC90Y/Qs9GC0LDRgNGB0LDQvS4g0KHQsNCz0YHQsNC5LCDQptGN0L3Qs9GN0Lsg0YHRg9C80LTRi9C9INOp0L3QtNOp0YAg0LTQsNCy0LDQsNC90YPRg9C0INGF0LDQsNCz0LTQsNGFINGN0YDRgdC00Y3Qu9GC0Y3QuS4nLFxuICAgICAgY3JpdGljYWxXYXJuaW5nOiAn06jQvdC006nRgCDRg9GD0LvRi9C9INC00LDQstCw0LAg0LPSr9Cy0Y3RjdC90LQg0YXSr9GH0YLRjdC5INGI0YPRg9GA0LPQsCDRiNGD0YPRgNCw0YUg0YLRg9C7INCw0LvRgdGL0L0g0LfQsNC80LQg0LPQsNGA0LDRhdCz0q/QuSDQsdCw0LnRhS4nLFxuICAgIH0sXG4gICAgaGVyZGVyQWR2aXNvcmllczoge1xuICAgICAgdXJnZW50QWN0aW9uczogW1xuICAgICAgICAn0KHQsNC70YXQuNC90Ysg0YPRgNGD0YMg0LzQsNC70LDQsCDQsdGN0LvRh9GN0Y3RhdGN0Y3RgSDRjdGA0YEg0LfQsNC50LvRgdGF0LjQudGFJyxcbiAgICAgICAgJ9Oo0LLTqdC70LbTqdOp0L3QuNC5INC906nTqdGGINOp0LLRgSwg0YXRg9C20LjRgCDRiNKv0q/QsyDQsNC50LzQs9C40LnQvSDQvdOp06nRhtOp06nRgSDRhdKv0LvRjdGN0L0g0LDQstCw0YUg0YXSr9GB0Y3Qu9GCINCz0LDRgNCz0LDRhScsXG4gICAgICAgICfQnNCw0LvRi9C9INGD0YHQsNC9INGF0LDQvdCz0LDQvNC20LjQudCzINGC0LDRgdCw0LvQtNGD0YPQu9Cw0YXQs9Kv0Lkg0LHQsNC50YUsINCz0L7QuyDQvNOp0YDQvdC40Lkg0LzTqdGB0LjQudCzINOp0LTTqdGAINCx0q/RgCDRhtC+0L7Qu9C+0YUnLFxuICAgICAgXSxcbiAgICAgIGdyYXppbmdBZHZpY2U6ICfQodCw0LvRhdC40LPSr9C5INOp0LTRgNKv0q/QtNGN0LQg0L3QsNGA0LvQsNCzINGN0L3Qs9GN0YDRjdGN0YAg0LHQvtCz0LjQvdC+INC30LDQudC0INCx0Y3Qu9GH0Y3RjdC2LCDRhdKv0YfRgtGN0Lkg0YHQsNC70YXQuNC90Ysg0q/QtdC0INGF0LDRiNCw0LDQvdC00LDQsCDRgtGN0LbRjdGN0YUuJyxcbiAgICAgIGZlZWROdXRyaXRpb25BZHZpY2U6ICfQltCw0LLQsNGA0YLQsNC5INOp0LTRgNKv0q/QtNGN0LQg0LDQtNGD0YMg0LHQvtC70L7QvSDQsdC+0LMg0LzQsNC70LQg0Y3RgNC00Y3RgSDQtNGD0YLQsNCz0LTQu9Cw0LDRgSDRgdGN0YDQs9C40LnQu9C2INC00LDQstGBLCDRhdGD0LbQuNGAINGC0L7Qs9GC0LzQvtC7INGC0LDQstC40YUuJyxcbiAgICAgIHNoZWx0ZXJDb2xkUHJvdGVjdGlvbjogJ9Cn0YPQu9GD0YPQvSDQsdC+0LvQvtC9INC80L7QtNC+0L0g0YXQvtGA0L7QvtC90Ysg0LfQsNCy0YHRgNGL0LMg0YjQsNCy0YDQsNCw0YAg0YjQsNCy0LDRhSwg0YjQsNC70YvQsyDRhdGD0YPRgNCw0Lkg0LHRg9GD0YbQsNCw0YAg0LTRjdCy0YHRjdGFLicsXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogW1xuICAgICAgICB7IG5hbWU6ICfQkdCw0Y/QvS3TqNC70LPQuNC5INCe0JHQkycsIHBob25lOiAnNzA0Mi0xMDUnIH0sXG4gICAgICAgIHsgbmFtZTogJ9Cc0LDQuyDRjdC80L3RjdC70LPQuNC50L0g0LPQsNC30LDRgCcsIHBob25lOiAnNzA0Mi0yMzAxJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdiYXlhbmtob25nb3InLFxuICAgIHNoYXBlTmFtZTogJ0JheWFua2hvbmdvcicsXG4gICAgaXNvOiAnTU4tMDY5JyxcbiAgICBuYW1lTW46ICfQkdCw0Y/QvdGF0L7QvdCz0L7RgCcsXG4gICAgbmFtZUVuOiAnQmF5YW5raG9uZ29yJyxcbiAgICBjZW50ZXJNbjogJ9CR0LDRj9C90YXQvtC90LPQvtGAINGF0L7RgicsXG4gICAgY2VudGVyQ29vcmRpbmF0ZXM6IFs0Ni4xOTQ0LCAxMDAuNzE4MV0sXG4gICAgcmVnaW9uOiAn0KXQsNC90LPQsNC50L0g0LHSr9GBJyxcbiAgICBhcmVhS20yOiAxMTU5NzgsXG4gICAgcG9wdWxhdGlvbjogODg3MDAsXG4gICAgbGl2ZXN0b2NrOiB7XG4gICAgICB0b3RhbDogNDEyMDgwMCxcbiAgICAgIGhvcnNlczogMTgyMzAwLFxuICAgICAgY2F0dGxlOiAyMjE1MDAsXG4gICAgICBjYW1lbHM6IDUxMjAwLFxuICAgICAgc2hlZXA6IDE2MTA0MDAsXG4gICAgICBnb2F0czogMjA1NTQwMCxcbiAgICAgIHllYXJDaGFuZ2VQZXJjZW50OiAtNy40LFxuICAgICAgZGVuc2l0eVBlclNxS206IDM1LjUsXG4gICAgfSxcbiAgICBwYXN0dXJlOiB7XG4gICAgICBvdmVybG9hZFJhdGlvOiAzLjIsXG4gICAgICBzdGF0dXM6ICdjcml0aWNhbF9vdmVybG9hZCcsXG4gICAgICBzdGF0dXNMYWJlbDogJ9CU0LDQsNGGIDMt0LDQsNGBINC00Y3RjdGIINC00LDRhdC40L0g0YXRjdGC0Y3RgNGB0Y3QvScsXG4gICAgICB5aWVsZEN3dEhhOiAxLjQsXG4gICAgICBmb2RkZXJQcmVwYXJlZFBlcmNlbnQ6IDY4LFxuICAgICAgaGF5UHJlcGFyZWRUb25zOiA1NDAwMCxcbiAgICAgIGdyYXppbmdQcmVzc3VyZTogJ9Cd0Y3QvSDQsNGH0LDQsNC70LDQu9GC0LDQuScsXG4gICAgfSxcbiAgICBkenVkUmlzazoge1xuICAgICAgbGV2ZWw6ICdjcml0aWNhbCcsXG4gICAgICBsZXZlbExhYmVsOiAn0J3RjdC9INC40YUg0Y3RgNGB0LTRjdC70YLRjdC5JyxcbiAgICAgIHNjb3JlOiA5MSxcbiAgICAgIHByaW1hcnlUeXBlOiAn0KXQsNCy0YHQsNGA0YHQsNC9INC30YPQtCcsXG4gICAgICBzbm93RGVwdGhDbTogMjgsXG4gICAgICBzbm93Q292ZXJQZXJjZW50OiA4NixcbiAgICAgIGFmZmVjdGVkU291bXNDb3VudDogMTcsXG4gICAgICB0b3RhbFNvdW1zOiAyMCxcbiAgICAgIHN1bW1hcnk6ICfQpdCw0L3Qs9Cw0LnQvSDQsdC+0LvQvtC9INCz0L7QstC40LnQvSDQsdKv0YHQuNC50L0g0LfQsNCw0LMg0L3Rg9GC0LPQsNCw0YAg0LHRjdC70YfRjdGN0YDQuNC50L0g0YPRgNCz0LDRhiDQt9GD0L0g0LzQsNGIINC80YPRgyDQs9Cw0YDRhywg06nQstC70LjQudC9INGN0YXRjdC90LQg0YbQsNGBINGN0YDRgiDQvtGA0LYg0LzTqdGB0YLRgdOp0L0uINCT0L7QstGMLdCl0LDQvdCz0LDQudC9INGB0YPQvNC00LDQtCDQvNCw0Lsg0L7QvdC0INC+0YDQvtGF0L7QtCDQvNCw0Ygg0YXSr9C90LQg0LHQsNC50L3QsC4nLFxuICAgICAgY3JpdGljYWxXYXJuaW5nOiAn0KjQuNC90Y3QttC40L3RgdGCLCDQkdCw0Y/QvS3TqNC90LTTqdGALCDQkdCw0Y/QvdCz0L7QstGMLCDQkdC+0LPQtCDRgdGD0LzQtNCw0LQg06nQstGBINGC0Y3QttGN0Y3Qu9C40LnQvSDRhdC+0LzRgdC00L7QuyDQvdGN0L0g06nQvdC006nRgCDRgtKv0LLRiNC40L3QtCDRhdKv0YDRgdGN0L0uJyxcbiAgICB9LFxuICAgIGhlcmRlckFkdmlzb3JpZXM6IHtcbiAgICAgIHVyZ2VudEFjdGlvbnM6IFtcbiAgICAgICAgJ9CQ0LnQvNCz0LjQudC9INC+0L3RhtCz0L7QuSDQutC+0LzQuNGB0YEg0LHQvtC70L7QvSDRgdGD0LzRi9C9INC306nQstC706nQu9C0INC90Y3QvSDRj9Cw0YDQsNC70YLQsNC5INGC0YPRgdC70LDQvNC20LjQudC9INOp0LLRgSDRgtGN0LbRjdGN0LvQuNC50L0g0LfQsNGF0LjQsNC70LPQsCDTqdCz06nRhScsXG4gICAgICAgICfQodGD0LLQsNC5INCx0L7Qu9C+0L0g0YLRg9GA0LDQvdCz0Lgg0LHQvtCz0LjQudCzINGP0LvQs9Cw0L0g0YLRg9GB0LPQsNCw0YDQu9Cw0LYg0LTRg9C70LDQsNC9INCx0LDQudGA0LDQvdC0INGC0Y3QttGN0Y3RhScsXG4gICAgICAgICfQotGN0LzRjdGNLCDQsNC00YPRg9C90Ysg0LHRjdC70YfRjdGN0YDQuNC50LMg0LPQvtCy0LjQudC9INCx0YPRgiDRgdOp06nQs9GCINCx0q/RgSDRgNKv0q8g0YjQuNC70LbSr9Kv0LvRjdGFJyxcbiAgICAgIF0sXG4gICAgICBncmF6aW5nQWR2aWNlOiAn0KbQsNGBINC30YPQt9Cw0LDQvSDRgtC+0LPRgtGB0L7QvSDRgtCw0Lsg0LPQsNC30YDQsNCw0YEg0LfQsNC50LvRgdGF0LjQudC2LCDRgdCw0LvRhdC40L3RiyDSr9C70Y3RjdC70YLRjdGN0YAg0YbQsNGBINCx0LDQs9Cw0YHRgdCw0L0g0YjQuNC7INGF0Y/RgCDQsdGN0LvRh9GN0Y3RgNGCINC80LDQu9C70LDRhS4nLFxuICAgICAgZmVlZE51dHJpdGlvbkFkdmljZTogJ9Ct0YDQtNGN0YHQttKv0q/Qu9GB0Y3QvSDRhdC+0LvQuNC80L7QsyDRgtGN0LbRjdGN0LssINCx0YPRg9C00LDQuSwg0Y3RgNC00Y3QvdGNINGI0LjRiNC40LnQvSDRhdGN0LvRgtGB0LjQudCzINGF0LDQu9GD0YPQvSDRg9GB0LDQsNGAINC00Y3QstGC0Y3RjdC9INOp0LPTqdGFLicsXG4gICAgICBzaGVsdGVyQ29sZFByb3RlY3Rpb246ICfQpdCw0YjQsNCwINGB0LDRgNCw0LLRh9C40L3QtCDQs9GP0LvQs9Cw0YAg0YbQsNCw0YEsINGF0YPQu9GB0LDQvSDQvdOp0LzRgNOp0LMg0LTQsNCy0YXQsNGAINGC0LDRgtCw0LYg0YHQsNC70YXQuCDRhdCw0LDRhS4nLFxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IFtcbiAgICAgICAgeyBuYW1lOiAn0JHQsNGP0L3RhdC+0L3Qs9C+0YAg0J7QkdCTJywgcGhvbmU6ICc3MDQ0LTEwNScgfSxcbiAgICAgICAgeyBuYW1lOiAn0JDQudC80LPQuNC50L0g0KXQpdCQ0JDQkycsIHBob25lOiAnNzA0NC0yNDUxJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdidWxnYW4nLFxuICAgIHNoYXBlTmFtZTogJ0J1bGdhbicsXG4gICAgaXNvOiAnTU4tMDY3JyxcbiAgICBuYW1lTW46ICfQkdGD0LvQs9Cw0L0nLFxuICAgIG5hbWVFbjogJ0J1bGdhbicsXG4gICAgY2VudGVyTW46ICfQkdGD0LvQs9Cw0L0g0YXQvtGCJyxcbiAgICBjZW50ZXJDb29yZGluYXRlczogWzQ4LjgxMjUsIDEwMy41MzQ3XSxcbiAgICByZWdpb246ICfQpdCw0L3Qs9Cw0LnQvSDQsdKv0YEnLFxuICAgIGFyZWFLbTI6IDQ4NzMzLFxuICAgIHBvcHVsYXRpb246IDYyMTAwLFxuICAgIGxpdmVzdG9jazoge1xuICAgICAgdG90YWw6IDM5NTA0MDAsXG4gICAgICBob3JzZXM6IDQxMjAwMCxcbiAgICAgIGNhdHRsZTogNDg5MDAwLFxuICAgICAgY2FtZWxzOiAxNDAwLFxuICAgICAgc2hlZXA6IDE5ODAwMDAsXG4gICAgICBnb2F0czogMTA2ODAwMCxcbiAgICAgIHllYXJDaGFuZ2VQZXJjZW50OiAtMS44LFxuICAgICAgZGVuc2l0eVBlclNxS206IDgxLjEsXG4gICAgfSxcbiAgICBwYXN0dXJlOiB7XG4gICAgICBvdmVybG9hZFJhdGlvOiAyLjEsXG4gICAgICBzdGF0dXM6ICdoaWdoX292ZXJsb2FkJyxcbiAgICAgIHN0YXR1c0xhYmVsOiAn0JTQsNCw0YYgMi0zINC00LDRhdC40L0g0YXRjdGC0Y3RgNGB0Y3QvScsXG4gICAgICB5aWVsZEN3dEhhOiAzLjEsXG4gICAgICBmb2RkZXJQcmVwYXJlZFBlcmNlbnQ6IDkxLFxuICAgICAgaGF5UHJlcGFyZWRUb25zOiAxMzUwMDAsXG4gICAgICBncmF6aW5nUHJlc3N1cmU6ICfQkNGH0LDQsNC70LDQuyDQuNGF0YLRjdC5JyxcbiAgICB9LFxuICAgIGR6dWRSaXNrOiB7XG4gICAgICBsZXZlbDogJ21vZGVyYXRlJyxcbiAgICAgIGxldmVsTGFiZWw6ICfQlNGD0L3QtCDRjdGA0YHQtNGN0LvRgtGN0LknLFxuICAgICAgc2NvcmU6IDU4LFxuICAgICAgcHJpbWFyeVR5cGU6ICfQptCw0LPQsNCw0L0g0LfRg9C0JyxcbiAgICAgIHNub3dEZXB0aENtOiAxOCxcbiAgICAgIHNub3dDb3ZlclBlcmNlbnQ6IDcyLFxuICAgICAgYWZmZWN0ZWRTb3Vtc0NvdW50OiA4LFxuICAgICAgdG90YWxTb3VtczogMTYsXG4gICAgICBzdW1tYXJ5OiAn0KXQsNC90LPQsNC7LCDQodGN0LvRjdC90LPRjSwg0KLRjdGI0LjQsyDRgdGD0LzQtNCw0LQg0YbQsNGBINGF0LDRgNGM0YbQsNC90LPRg9C5INC30YPQt9Cw0LDQvSDQsdC+0LvQvtCy0Ycg06nQstGB0L3QuNC5INCz0LDRgNGGINGB0LDQudC9INCx0LDQudGB0LDQvSDRgtGD0Lsg0L3TqdGF0YbTqdC7INCx0LDQudC00LDQuyDRgtC+0LPRgtCy0L7RgNGC0L7QuS4g0KPRgNC0INGC0LDQu9GL0L0g0YHRg9C80LTQsNC0INGG0LDRgSDQsdCw0LPQsNGC0LDQuS4nLFxuICAgICAgY3JpdGljYWxXYXJuaW5nOiBudWxsLFxuICAgIH0sXG4gICAgaGVyZGVyQWR2aXNvcmllczoge1xuICAgICAgdXJnZW50QWN0aW9uczogW1xuICAgICAgICAn06jQstGBINGC0Y3QttGN0Y3Qu9C40LnQvSDQvdOp06nRhtC40LnQsyDRhdGD0LLQsNCw0YDQuNC50L0g0LTQsNCz0YPRgyDQs9Cw0LzRgtCw0Lkg0YXRjdGA0Y3Qs9C70Y3RhScsXG4gICAgICAgICfQkdGN0LvRh9GN0Y3RgNC40LnQvSDRgdGN0LvQs9GN0Y3QsyDQvtC50L0g0YLTqdCz06nQuywg0YPRg9C70YvQvSDQsNC8INGA0YPRgyDQt9Op0LIg0LfQvtGF0LjQvtC9INCx0LDQudCz0YPRg9C70LDRhScsXG4gICAgICAgICfQnNCw0Lsg0YHSr9GA0LPQuNC50LMg0Y3RgNKv0q/QuyDQvNGN0L3QtNC40LnQvSDRg9GA0YzQtNGH0LjQu9Cw0L0g0YHRjdGA0LPQuNC50LvRjdGFINCy0LDQutGG0LjQvdC20YPRg9C70LDQu9GC0LDQtCDQsdKv0YDRjdC9INGF0LDQvNGA0YPRg9C70LDRhScsXG4gICAgICBdLFxuICAgICAgZ3JhemluZ0FkdmljZTogJ9Ce0LnQvSDRhtC+0L7RgNGF0L7QuSDQsdC+0LvQvtC9INGD0YPQu9GL0L0g0Y3QvdCz0Y3RgCDQsdGN0LvRjdGN0YAg0LzQsNC70LvQsNC2INGG0LDRgdC90LDQsNGBINGF0LDQvNCz0LDQsNC70LDRhS4nLFxuICAgICAgZmVlZE51dHJpdGlvbkFkdmljZTogJ9Ch0LDQudC9INGH0LDQvdCw0YDRi9C9INC90L7Qs9C+0L7QvSDRgtGN0LbRjdGN0LssINCx0LDQudCz0LDQu9C40LnQvSDRhdCw0LTQu9Cw0L3Qs9C40LnQvSDTqdCy0YHQuNC50LMg0YLQvtCz0YLQvNC+0Lsg06nQs9Op0YUuJyxcbiAgICAgIHNoZWx0ZXJDb2xkUHJvdGVjdGlvbjogJ9Cl0LDRiNCw0LAg0YXQvtGA0L7QvtC90Ysg0YbQsNGB0YvQsyDQsNGA0LjQu9Cz0LDQtiwg0L3QvtC50YLQvtC9INGF06nRgCDSr9Kv0YHRjdGF0Y3RjdGBINGB0Y3RgNCz0LjQudC70Y3RhS4nLFxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IFtcbiAgICAgICAgeyBuYW1lOiAn0JHRg9C70LPQsNC9INCe0JHQkycsIHBob25lOiAnNzAzNC0xMDUnIH0sXG4gICAgICAgIHsgbmFtZTogJ9Cl0KXQkNCQ0JMg0LfTqdCy0LvTqdCz06nTqScsIHBob25lOiAnNzAzNC0yMjkwJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdnb3ZpLWFsdGFpJyxcbiAgICBzaGFwZU5hbWU6ICdHb3ZpLUFsdGFpJyxcbiAgICBpc286ICdNTi0wNjUnLFxuICAgIG5hbWVNbjogJ9CT0L7QstGMLdCQ0LvRgtCw0LknLFxuICAgIG5hbWVFbjogJ0dvdmktQWx0YWknLFxuICAgIGNlbnRlck1uOiAn0JDQu9GC0LDQuSDRhdC+0YInLFxuICAgIGNlbnRlckNvb3JkaW5hdGVzOiBbNDYuMzcyMiwgOTYuMjU4M10sXG4gICAgcmVnaW9uOiAn0JHQsNGA0YPRg9C9INCx0q/RgScsXG4gICAgYXJlYUttMjogMTQxNDQ3LFxuICAgIHBvcHVsYXRpb246IDU4MzAwLFxuICAgIGxpdmVzdG9jazoge1xuICAgICAgdG90YWw6IDM0MTA1MDAsXG4gICAgICBob3JzZXM6IDEzODAwMCxcbiAgICAgIGNhdHRsZTogMTI0MDAwLFxuICAgICAgY2FtZWxzOiA0NzgwMCxcbiAgICAgIHNoZWVwOiAxMzUwNzAwLFxuICAgICAgZ29hdHM6IDE3NTAwMDAsXG4gICAgICB5ZWFyQ2hhbmdlUGVyY2VudDogLTYuMixcbiAgICAgIGRlbnNpdHlQZXJTcUttOiAyNC4xLFxuICAgIH0sXG4gICAgcGFzdHVyZToge1xuICAgICAgb3ZlcmxvYWRSYXRpbzogMy40LFxuICAgICAgc3RhdHVzOiAnY3JpdGljYWxfb3ZlcmxvYWQnLFxuICAgICAgc3RhdHVzTGFiZWw6ICfQlNCw0LDRhiAzLdCw0LDRgSDQtNGN0Y3RiCDQtNCw0YXQuNC9INGF0Y3RgtGN0YDRgdGN0L0nLFxuICAgICAgeWllbGRDd3RIYTogMS4xLFxuICAgICAgZm9kZGVyUHJlcGFyZWRQZXJjZW50OiA2MixcbiAgICAgIGhheVByZXBhcmVkVG9uczogNDEwMDAsXG4gICAgICBncmF6aW5nUHJlc3N1cmU6ICfQndGN0L0g0LDRh9Cw0LDQu9Cw0LvRgtCw0LknLFxuICAgIH0sXG4gICAgZHp1ZFJpc2s6IHtcbiAgICAgIGxldmVsOiAnY3JpdGljYWwnLFxuICAgICAgbGV2ZWxMYWJlbDogJ9Cd0Y3QvSDQuNGFINGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogOTMsXG4gICAgICBwcmltYXJ5VHlwZTogJ9Cl0LDRgCDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDE0LFxuICAgICAgc25vd0NvdmVyUGVyY2VudDogNjUsXG4gICAgICBhZmZlY3RlZFNvdW1zQ291bnQ6IDE1LFxuICAgICAgdG90YWxTb3VtczogMTgsXG4gICAgICBzdW1tYXJ5OiAn0JfRg9C90Ysg0LPQsNC90LPQuNC50L0g0YPQu9C80LDQsNGBINGD0YDQs9Cw0LzQsNC7INGD0YDQs9Cw0LDQs9Kv0LksINOp0LLTqdC70LTTqdOpINGG0LDRgSDQvtGA0L7RhdCz0q/QuSDRhdKv0LnRgtGN0L0g0LbQsNCy0LDRgCDRh9Cw0L3Qs9Cw0YDRhyDRg9GBINGF0YPQtNCw0LMg0YXTqdC70LTRgdOp0L0g0YXQsNGAINC30YPQtNGL0L0g0L3TqdGF0YbTqdC7INCx0q/RgNC00YHRjdC9LiDQnNCw0LvRi9C9INGD0L3QtNCw0LAg0YXQvtC80YHQtNC+0LYg0LHQsNC50L3QsC4nLFxuICAgICAgY3JpdGljYWxXYXJuaW5nOiAn0KLQvtC90YXQuNC7LCDQlNCw0YDQstC4LCDQqNCw0YDQs9CwLCDQpdCw0LvQuNGD0L0sINCm0Y3RjdC7INGB0YPQvNC00LDQtCDRg9GB0LbRg9GD0LvQsNC70YIg0LHQvtC70L7QvSDRgtGN0LbRjdGN0LvQuNC50L0g0YLRg9GB0LvQsNC80LYg0Y/QsNGA0LDQu9GC0LDQuSDRiNCw0LDRgNC00LvQsNCz0LDRgtCw0LkuJyxcbiAgICB9LFxuICAgIGhlcmRlckFkdmlzb3JpZXM6IHtcbiAgICAgIHVyZ2VudEFjdGlvbnM6IFtcbiAgICAgICAgJ9Cl0YPQtNCw0LMg0YPRgdC90Ysg0YXQvtC+0LvQvtC5INGF06nQu9C006nRhdOp06nRgSDRgdGN0YDQs9C40LnQu9C2INC00YPQu9Cw0LDQu9Cw0YUsINGD0YHRi9CzINCx0q/Qu9GN0Y3QvdGN0Y3RgCDTqdCz06nRhScsXG4gICAgICAgICfQpdCw0YAg0LfRg9C00YLQsNC5INGB0YPQvNC00YvQvSDQvNCw0LvRi9CzINC30Y3RgNCz0Y3Qu9C00Y3RjdGFINC906nTqdGGINCx0Y3Qu9GH0Y3RjdGA0YIg0LPRjdGA0Y3RjdCz0Y3RjdGAINC+0YLQvtGA0LvRg9GD0LvQsNGFJyxcbiAgICAgICAgJ9Cv0LzQsNCwLCDRhdC+0L3QuNC90LQg0Y3RgNC00Y3RgSDRgtGN0LbRjdGN0LssINC00LDQstGB0YvQsyDRg9GB0LDQvdC0INGD0YPRgdCz0LDQvSDTqdCz0Ycg0YjQuNC90LPRjdC9INCw0LvQtNCw0LvRgtCw0LDRgSDRgdGN0YDQs9C40LnQu9GN0YUnLFxuICAgICAgXSxcbiAgICAgIGdyYXppbmdBZHZpY2U6ICfQodCw0LvRhdC4INC40YXRgtGN0Lkg0YLQsNC7INCz0LDQt9Cw0YDRgiDQsdC40YgsINGF0LDQtCDQsNGB0LPQsCDQvdOp0LzTqdGA0YLRjdC5INGF06nQvdC00LjQudC0INCx0Y3Qu9GH0Y3RjdGFLicsXG4gICAgICBmZWVkTnV0cml0aW9uQWR2aWNlOiAn0KjQuNC8INGC0Y3QttGN0Y3Qu9GC0Y3QuSDQsdCw0LPRgdCw0YDQvNCw0Lsg0YLRjdC20Y3RjdC7LCDRiNCw0YAg0LHRg9GD0YDRhtCw0LPQvdGLINGI0LDRhdC00LDRgSDQsdCw0LPQsCDRgtGD0L3Qs9Cw0LDRgCDTqdC006nRgNGCIDIg0YPQtNCw0LAg06nQs9Op0YUuJyxcbiAgICAgIHNoZWx0ZXJDb2xkUHJvdGVjdGlvbjogJ9Co06nQvdC40LnQvSDRhtCw0LPQsNCw0YAg0LHQuNGC0q/SryDRhdCw0YjQsNCw0L3QtCDQsdCw0LnQu9Cz0LDQtiwg0YHQsNC70YXQuNC90Ysg0YHQuNC50LPRjdC70YLQuNC50LMg0LHSr9GA0Y3QvSDRhdCw0LDRhS4nLFxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IFtcbiAgICAgICAgeyBuYW1lOiAn0JPQvtCy0Ywt0JDQu9GC0LDQuSDQntCR0JMnLCBwaG9uZTogJzcwNDgtMTA1JyB9LFxuICAgICAgICB7IG5hbWU6ICfQntC90YbQs9C+0Lkg0LrQvtC80LjRgdGB0YvQvSDRiNGD0YPRgNGF0LDQuScsIHBob25lOiAnNzA0OC0yNjEyJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdnb3Zpc3VtYmVyJyxcbiAgICBzaGFwZU5hbWU6ICdHb3Zpc3VtYmVyJyxcbiAgICBpc286ICdNTi0wNjQnLFxuICAgIG5hbWVNbjogJ9CT0L7QstGM0YHSr9C80LHRjdGAJyxcbiAgICBuYW1lRW46ICdHb3Zpc3VtYmVyJyxcbiAgICBjZW50ZXJNbjogJ9Cn0L7QudGAINGF0L7RgicsXG4gICAgY2VudGVyQ29vcmRpbmF0ZXM6IFs0Ni41MTY3LCAxMDguNjMzM10sXG4gICAgcmVnaW9uOiAn0KLTqdCy0LjQudC9INCx0q/RgScsXG4gICAgYXJlYUttMjogNTU0MSxcbiAgICBwb3B1bGF0aW9uOiAxODIwMCxcbiAgICBsaXZlc3RvY2s6IHtcbiAgICAgIHRvdGFsOiA0ODUwMDAsXG4gICAgICBob3JzZXM6IDQ5MDAwLFxuICAgICAgY2F0dGxlOiA0MjAwMCxcbiAgICAgIGNhbWVsczogMzgwMCxcbiAgICAgIHNoZWVwOiAyMTUwMDAsXG4gICAgICBnb2F0czogMTc1MjAwLFxuICAgICAgeWVhckNoYW5nZVBlcmNlbnQ6IC0wLjksXG4gICAgICBkZW5zaXR5UGVyU3FLbTogODcuNSxcbiAgICB9LFxuICAgIHBhc3R1cmU6IHtcbiAgICAgIG92ZXJsb2FkUmF0aW86IDEuOSxcbiAgICAgIHN0YXR1czogJ21vZGVyYXRlX292ZXJsb2FkJyxcbiAgICAgIHN0YXR1c0xhYmVsOiAn0JTQsNCw0YYgMS0yINC00LDRhdC40L0g0YXRjdGC0Y3RgNGB0Y3QvScsXG4gICAgICB5aWVsZEN3dEhhOiAxLjksXG4gICAgICBmb2RkZXJQcmVwYXJlZFBlcmNlbnQ6IDg2LFxuICAgICAgaGF5UHJlcGFyZWRUb25zOiAxNDIwMCxcbiAgICAgIGdyYXppbmdQcmVzc3VyZTogJ9CU0YPQvdC0INC30Y3RgNGN0LMnLFxuICAgIH0sXG4gICAgZHp1ZFJpc2s6IHtcbiAgICAgIGxldmVsOiAnbW9kZXJhdGUnLFxuICAgICAgbGV2ZWxMYWJlbDogJ9CU0YPQvdC0INGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogNTIsXG4gICAgICBwcmltYXJ5VHlwZTogJ9Cm0LDQs9Cw0LDQvSDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDEyLFxuICAgICAgc25vd0NvdmVyUGVyY2VudDogNjAsXG4gICAgICBhZmZlY3RlZFNvdW1zQ291bnQ6IDIsXG4gICAgICB0b3RhbFNvdW1zOiAzLFxuICAgICAgc3VtbWFyeTogJ9Cm0LDRgdC90Ysg0LfRg9C30LDQsNC9INC00YPQvdC00LbQsNCw0YAgMTAtMTUg0YHQvCwg0YLTqdC806nRgCDQt9Cw0Lwg0LTQsNCz0YPRgyDRgtGN0Y3QstGN0YAg0LvQvtCz0LjRgdGC0LjQuiDQvdCw0LnQtNCy0LDRgNGC0LDQuSDRgtGD0Lsg06nQstGBINGC0Y3QttGN0Y3Qu9C40LnQvSDQvdC40LnQu9Kv0q/Qu9GN0LvRgiDRgdCw0LDQtNCz0q/QuSDQsdCw0LnQvdCwLicsXG4gICAgICBjcml0aWNhbFdhcm5pbmc6IG51bGwsXG4gICAgfSxcbiAgICBoZXJkZXJBZHZpc29yaWVzOiB7XG4gICAgICB1cmdlbnRBY3Rpb25zOiBbXG4gICAgICAgICfQotOp0LzTqdGAINC30LDQvCwg0LDQstGC0L4g0LfQsNC80YvQvSDQvtC50YDQvtC70YbQvtC+INCx0Y3Qu9GH0Y3RjdGA0LvRjdC2INCx0YPQuSDQvNCw0LvRi9CzINC+0YHQvtC7INCw0LLQsNCw0YDQsNCw0YEg0YHRjdGA0LPQuNC50LvRjdGFJyxcbiAgICAgICAgJ9CR0Y3Qu9GC0LPRjdGB0Y3QvSDRgtGN0LbRjdGN0LvQuNC50L0g0L3TqdOp0YbTqdOpINCw0YDQuNCzINCz0LDQvNGC0LDQuSDRhdGD0LLQsNCw0YDQuNC70LDRhScsXG4gICAgICBdLFxuICAgICAgZ3JhemluZ0FkdmljZTogJ9Oo0LTRgNC40LnQvSDQs9GN0YDRjdC70YLRjdC5INGG0LDQs9GCINGC0L7Qs9GC0YPRg9C9INCx0Y3Qu9GH0Y3RjdGA0LvSr9Kv0LvRjdGFLicsXG4gICAgICBmZWVkTnV0cml0aW9uQWR2aWNlOiAn0KXQsNC00LvQsNC90LPQuNC50L0g0L3QvtCz0L7QvtC9INOp0LLRgdOp06nRgCDRgtC+0LPRgtC80L7QuyDQvdGN0LzRjdCz0LTRjdC7INOp0LPTqdGFLicsXG4gICAgICBzaGVsdGVyQ29sZFByb3RlY3Rpb246ICfQpdCw0YjQsNCw0L3RiyDRgdCw0LvRhdC40L0g0YLQsNC70YvQsyDQsdCw0L3QtyDQsdC+0LvQvtC9INCx0YDQtdC30LXQvdGC0Y3RjdGAINCx0Y3RhdC70Y3RhS4nLFxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IFtcbiAgICAgICAgeyBuYW1lOiAn0JPQvtCy0YzRgdKv0LzQsdGN0YAg0J7QkdCTJywgcGhvbmU6ICc3MDU0LTEwNScgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZGFya2hhbi11dWwnLFxuICAgIHNoYXBlTmFtZTogJ0RhcmtoYW4tVXVsJyxcbiAgICBpc286ICdNTi0wMzcnLFxuICAgIG5hbWVNbjogJ9CU0LDRgNGF0LDQvS3Qo9GD0LsnLFxuICAgIG5hbWVFbjogJ0RhcmtoYW4tVXVsJyxcbiAgICBjZW50ZXJNbjogJ9CU0LDRgNGF0LDQvSDRhdC+0YInLFxuICAgIGNlbnRlckNvb3JkaW5hdGVzOiBbNDkuNDg2NywgMTA1LjkyMjhdLFxuICAgIHJlZ2lvbjogJ9Ci06nQstC40LnQvSDQsdKv0YEnLFxuICAgIGFyZWFLbTI6IDMyNzUsXG4gICAgcG9wdWxhdGlvbjogMTA3MDAwLFxuICAgIGxpdmVzdG9jazoge1xuICAgICAgdG90YWw6IDM5ODAwMCxcbiAgICAgIGhvcnNlczogMzIwMDAsXG4gICAgICBjYXR0bGU6IDc1MDAwLFxuICAgICAgY2FtZWxzOiA0MDAsXG4gICAgICBzaGVlcDogMTc4MDAwLFxuICAgICAgZ29hdHM6IDExMjYwMCxcbiAgICAgIHllYXJDaGFuZ2VQZXJjZW50OiArMS4yLFxuICAgICAgZGVuc2l0eVBlclNxS206IDEyMS41LFxuICAgIH0sXG4gICAgcGFzdHVyZToge1xuICAgICAgb3ZlcmxvYWRSYXRpbzogMi4yLFxuICAgICAgc3RhdHVzOiAnaGlnaF9vdmVybG9hZCcsXG4gICAgICBzdGF0dXNMYWJlbDogJ9CU0LDQsNGGIDItMyDQtNCw0YXQuNC9INGF0Y3RgtGN0YDRgdGN0L0nLFxuICAgICAgeWllbGRDd3RIYTogMy44LFxuICAgICAgZm9kZGVyUHJlcGFyZWRQZXJjZW50OiA5NSxcbiAgICAgIGhheVByZXBhcmVkVG9uczogMzgwMDAsXG4gICAgICBncmF6aW5nUHJlc3N1cmU6ICfQkNGH0LDQsNC70LDQuyDQuNGF0YLRjdC5JyxcbiAgICB9LFxuICAgIGR6dWRSaXNrOiB7XG4gICAgICBsZXZlbDogJ2xvdycsXG4gICAgICBsZXZlbExhYmVsOiAn0JHQsNCz0LAg0Y3RgNGB0LTRjdC70YLRjdC5JyxcbiAgICAgIHNjb3JlOiAzNSxcbiAgICAgIHByaW1hcnlUeXBlOiAn0KbQsNCz0LDQsNC9INC30YPQtCcsXG4gICAgICBzbm93RGVwdGhDbTogMTUsXG4gICAgICBzbm93Q292ZXJQZXJjZW50OiA2OCxcbiAgICAgIGFmZmVjdGVkU291bXNDb3VudDogMSxcbiAgICAgIHRvdGFsU291bXM6IDQsXG4gICAgICBzdW1tYXJ5OiAn0JPQsNC30LDRgCDRgtCw0YDQuNCw0LvQsNC90LPQuNC50L0g0LHSr9GBINC90YPRgtCw0LMg0YLRg9C7INCx0LDQs9GB0LDRgNC80LDQuyDRgtGN0LbRjdGN0LssINKv0YAg0YLQsNGA0LjQsNC90Ysg0YHSr9GA0Y3QuyDRhdCw0L3Qs9Cw0LvRgtGC0LDQuS4g0JfRg9C0INCx0L7Qu9C+0YUg0Y3RgNGB0LTRjdC7INCx0LDQs9CwLCDTqdCy06nQu9C20LjQu9GCINGF0Y3QstC40LnQvSDQsdCw0LnQvdCwLicsXG4gICAgICBjcml0aWNhbFdhcm5pbmc6IG51bGwsXG4gICAgfSxcbiAgICBoZXJkZXJBZHZpc29yaWVzOiB7XG4gICAgICB1cmdlbnRBY3Rpb25zOiBbXG4gICAgICAgICfQotCw0YDQuNCw0LvQsNC90LPQuNC50L0g0YLQsNC70LHQsNC50LQg0LzQsNC7INC+0YDQtiDRhdOp0LvQtNGB06nQvSDQuNGILCDRgdCw0YXQsNC70LQg0LPRjdC80YLRjdGF0Y3RjdGBINCx0L7Qu9Cz0L7QvtC80LbQu9C+0YUnLFxuICAgICAgICAn0K3RgNGH0LjQvNC20YHRjdC9INGB0q/Sr9C90LjQuSDSr9GF0YDQuNC50L0g0LHQsNC50YDQvdGLINC00YPQu9Cw0LDQvdGLINCz0L7RgNC40LzRi9CzICsxMMKwQy3QsNCw0YEg0LTRjdGN0Ygg0LHQsNGA0LjRhScsXG4gICAgICBdLFxuICAgICAgZ3JhemluZ0FkdmljZTogJ9CR0LDQs9CwINC30LDQudC0INCx0Y3Qu9GH0Y3RjdGA0LvSr9Kv0LvQtiwg0LHQsNC50YDQsNC9INC80LDQu9C70LDQs9Cw0LDQvdGLINCz0L7RgNC40LzQtCDSr9C1INGI0LDRgtGC0LDQuSDRiNC40LvQttKv0q/Qu9GN0YUuJyxcbiAgICAgIGZlZWROdXRyaXRpb25BZHZpY2U6ICfQlNCw0YDRiCwg0YHSr9GA0Y3Quywg0LHQsNGP0LbRg9GD0LvRgdCw0L0g0YXQuNCy0Y3Qs9C90LjQuSDRhdC+0LvRjNGG0L7QvtGAINOp0LTTqdGA0YIgMiDRg9C00LDQsCDRgtGN0LbRjdGN0YUuJyxcbiAgICAgIHNoZWx0ZXJDb2xkUHJvdGVjdGlvbjogJ9Ck0LXRgNC80LjQudC9INCx0LDQudGA0YvQsyDQsNCy0YLQvtC80LDRgiDQsNCz0LDQsNGA0LbRg9GD0LvQsNC70YLRgtCw0LnQs9Cw0LDRgCDQtNGD0LvQsNCw0LvQsNGFLicsXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogW1xuICAgICAgICB7IG5hbWU6ICfQlNCw0YDRhdCw0L0g0J7QkdCTJywgcGhvbmU6ICc3MDM3LTEwNScgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZG9ybm9nb3ZpJyxcbiAgICBzaGFwZU5hbWU6ICdEb3Jub2dvdmknLFxuICAgIGlzbzogJ01OLTA2MycsXG4gICAgbmFtZU1uOiAn0JTQvtGA0L3QvtCz0L7QstGMJyxcbiAgICBuYW1lRW46ICdEb3Jub2dvdmknLFxuICAgIGNlbnRlck1uOiAn0KHQsNC50L3RiNCw0L3QtCDRhdC+0YInLFxuICAgIGNlbnRlckNvb3JkaW5hdGVzOiBbNDQuODg0NCwgMTEwLjEzNjddLFxuICAgIHJlZ2lvbjogJ9Ci06nQstC40LnQvSDQsdKv0YEnLFxuICAgIGFyZWFLbTI6IDEwOTQ3MixcbiAgICBwb3B1bGF0aW9uOiA3MTIwMCxcbiAgICBsaXZlc3RvY2s6IHtcbiAgICAgIHRvdGFsOiAyODkwMDAwLFxuICAgICAgaG9yc2VzOiAxOTUwMDAsXG4gICAgICBjYXR0bGU6IDEzNTAwMCxcbiAgICAgIGNhbWVsczogNDg1MDAsXG4gICAgICBzaGVlcDogMTIxMDAwMCxcbiAgICAgIGdvYXRzOiAxMzAxNTAwLFxuICAgICAgeWVhckNoYW5nZVBlcmNlbnQ6IC0zLjUsXG4gICAgICBkZW5zaXR5UGVyU3FLbTogMjYuNCxcbiAgICB9LFxuICAgIHBhc3R1cmU6IHtcbiAgICAgIG92ZXJsb2FkUmF0aW86IDIuMyxcbiAgICAgIHN0YXR1czogJ2hpZ2hfb3ZlcmxvYWQnLFxuICAgICAgc3RhdHVzTGFiZWw6ICfQlNCw0LDRhiAyLTMg0LTQsNGF0LjQvSDRhdGN0YLRjdGA0YHRjdC9JyxcbiAgICAgIHlpZWxkQ3d0SGE6IDEuNixcbiAgICAgIGZvZGRlclByZXBhcmVkUGVyY2VudDogNzgsXG4gICAgICBoYXlQcmVwYXJlZFRvbnM6IDQ2MDAwLFxuICAgICAgZ3JhemluZ1ByZXNzdXJlOiAn0JDRh9Cw0LDQu9Cw0Lsg0LjRhdGC0Y3QuScsXG4gICAgfSxcbiAgICBkenVkUmlzazoge1xuICAgICAgbGV2ZWw6ICdoaWdoJyxcbiAgICAgIGxldmVsTGFiZWw6ICfQmNGFINGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogNzUsXG4gICAgICBwcmltYXJ5VHlwZTogJ9Cl0LDRgCDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDExLFxuICAgICAgc25vd0NvdmVyUGVyY2VudDogNTUsXG4gICAgICBhZmZlY3RlZFNvdW1zQ291bnQ6IDgsXG4gICAgICB0b3RhbFNvdW1zOiAxNCxcbiAgICAgIHN1bW1hcnk6ICfQk9C+0LLQuNC50L0g0YHRg9C80LTQsNC0INGG0LDRgSDQsdCw0LPQsNGC0LDQuSDQsdC+0LvQvtCy0Ycg0YXSr9C50YLRjdC9INC20LDQstCw0YAg0YfQsNC90LPQsNGA0YcsINGF0YPQtNCw0LMg0YPRgdC90Ysg0YbRjdC90Y3QsyDQsdCw0LPQsNGB0YHQsNC9LiDQmNGF0YXRjdGCLCDQlNGN0LvQs9GN0YDRjdGFINGB0YPQvNC00LDQtCDRhdCw0YLRg9GDINGF06nRgCDRgtC+0LPRgtGB0L7QvS4nLFxuICAgICAgY3JpdGljYWxXYXJuaW5nOiAn0KXSr9C50YLRjdC9INGB0LDQu9GF0LggMTgtMjQg0Lwv0YEg0YXSr9GA0Ycg0YjRg9GD0YDQsNGFINGC06nQu9Op0LLRgtGN0Lkg0YLRg9C7INCz0L7QstC40LnQvSDQvNCw0LvRh9C00LDQtCDRgdGN0YDRjdC80LbQu9Kv0q/Qu9GN0LMg0YXSr9GA0LPRjdC2INCx0LDQudC90LAuJyxcbiAgICB9LFxuICAgIGhlcmRlckFkdmlzb3JpZXM6IHtcbiAgICAgIHVyZ2VudEFjdGlvbnM6IFtcbiAgICAgICAgJ9Ch0LDQu9GF0Lgg0YjRg9GD0YDQs9Cw0L3QtCDQvNCw0Lsg0YPRgNGD0YPQtNCw0YXQsNCw0YEg0YXQsNC80LPQsNCw0LvQtiDRhdCw0YjQsNCw0L3RiyDRhdCw0LDQu9GC0YvQsyDQsdGN0YXQu9GN0YUnLFxuICAgICAgICAn0KXRg9C00LDQsyDRg9GB0YIg0YbRjdCz0q/Sr9C00LjQudCzINOp0LTTqdGAINCx0q/RgCDRhdGP0L3QsNC70YLQsNC0INCw0LLRhyDQsdKv0LvRjdGN0L0g0YPRgdCw0LDRgCDRg9GB0LvQsNGFJyxcbiAgICAgICAgJ9Ci0Y3QvNGN0Y3QvSDRgdKv0YDQs9C40LnQsyDQt9Cw0LMsINGF0LDRgNCz0LDQvdCw0YLQsNC5INC906nQvNOp0YAg0L3Rg9GC0LDQsyDRgNGD0YMg0LHRjdC70YfRjdGN0YUnLFxuICAgICAgXSxcbiAgICAgIGdyYXppbmdBZHZpY2U6ICfQodCw0LvRhdC40L3RiyDRgdOp0YDTqdCzINGH0LjQs9C70Y3Qu9C0INCx0Y3Qu9GH0Y3RjdGF0LPSr9C5INCx0LDQudGFLCDQs9C+0LLQuNC50L0g0YHQsNC50YAg0LbQsNC70LPQsCDQtNCw0LPRg9GD0LvQsNGFLicsXG4gICAgICBmZWVkTnV0cml0aW9uQWR2aWNlOiAn0KLRjdC20Y3RjdC70LjQudC9INGF0YPQttC40YAsINGN0YDQtNGN0YEg0YfRg9C70YPRgywg0LLQuNGC0LDQvNC40L3RgiDQsdGN0LvQtNC80Y3Qu9Kv0q/QtNC40LnQsyDRgtKv0LvRhdKv0q8g06nQs9Op0YUuJyxcbiAgICAgIHNoZWx0ZXJDb2xkUHJvdGVjdGlvbjogJ9Cl0LDRiNCw0LAg0YXQvtGA0L7QvtC90Ysg0L3TqdC80YDQuNC50LMg0YjQvtGA0L7QvtC9INC00LDQu9Cw0L3Qs9Cw0LDRgCDQtNCw0LLRhdCw0YAg0LHRjdGF0LbSr9Kv0LvRjdGFLicsXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogW1xuICAgICAgICB7IG5hbWU6ICfQlNC+0YDQvdC+0LPQvtCy0Ywg0J7QkdCTJywgcGhvbmU6ICc3MDUyLTEwNScgfSxcbiAgICAgICAgeyBuYW1lOiAn0KjRg9GD0YDRhdCw0Lkg0LDQu9Cx0LAnLCBwaG9uZTogJzcwNTItMjIyMicgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZG9ybm9kJyxcbiAgICBzaGFwZU5hbWU6ICdEb3Jub2QnLFxuICAgIGlzbzogJ01OLTA2MScsXG4gICAgbmFtZU1uOiAn0JTQvtGA0L3QvtC0JyxcbiAgICBuYW1lRW46ICdEb3Jub2QnLFxuICAgIGNlbnRlck1uOiAn0KfQvtC50LHQsNC70YHQsNC9INGF0L7RgicsXG4gICAgY2VudGVyQ29vcmRpbmF0ZXM6IFs0OC4wNzE3LCAxMTQuNTM4OV0sXG4gICAgcmVnaW9uOiAn0JfSr9Kv0L0g0LHSr9GBJyxcbiAgICBhcmVhS20yOiAxMjM1OTcsXG4gICAgcG9wdWxhdGlvbjogODM1MDAsXG4gICAgbGl2ZXN0b2NrOiB7XG4gICAgICB0b3RhbDogMzEyMDAwMCxcbiAgICAgIGhvcnNlczogMzM0MDAwLFxuICAgICAgY2F0dGxlOiA0ODUwMDAsXG4gICAgICBjYW1lbHM6IDcxMDAsXG4gICAgICBzaGVlcDogMTQ2MDAwMCxcbiAgICAgIGdvYXRzOiA4MzM5MDAsXG4gICAgICB5ZWFyQ2hhbmdlUGVyY2VudDogLTIuMyxcbiAgICAgIGRlbnNpdHlQZXJTcUttOiAyNS4yLFxuICAgIH0sXG4gICAgcGFzdHVyZToge1xuICAgICAgb3ZlcmxvYWRSYXRpbzogMS42LFxuICAgICAgc3RhdHVzOiAnbW9kZXJhdGVfb3ZlcmxvYWQnLFxuICAgICAgc3RhdHVzTGFiZWw6ICfQlNCw0LDRhiAxLTIg0LTQsNGF0LjQvSDRhdGN0YLRjdGA0YHRjdC9JyxcbiAgICAgIHlpZWxkQ3d0SGE6IDMuMixcbiAgICAgIGZvZGRlclByZXBhcmVkUGVyY2VudDogOTQsXG4gICAgICBoYXlQcmVwYXJlZFRvbnM6IDE2ODAwMCxcbiAgICAgIGdyYXppbmdQcmVzc3VyZTogJ9CU0YPQvdC0INC30Y3RgNGN0LMnLFxuICAgIH0sXG4gICAgZHp1ZFJpc2s6IHtcbiAgICAgIGxldmVsOiAnbW9kZXJhdGUnLFxuICAgICAgbGV2ZWxMYWJlbDogJ9CU0YPQvdC0INGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogNTksXG4gICAgICBwcmltYXJ5VHlwZTogJ9Cm0LDQs9Cw0LDQvSDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDE5LFxuICAgICAgc25vd0NvdmVyUGVyY2VudDogNzQsXG4gICAgICBhZmZlY3RlZFNvdW1zQ291bnQ6IDcsXG4gICAgICB0b3RhbFNvdW1zOiAxNCxcbiAgICAgIHN1bW1hcnk6ICfQlNC+0YDQvdC+0LTRi9C9INGC0LDQuyDQvdGD0YLQs9Cw0LDRgCDRhtCw0YHQvdGLINC30YPQt9Cw0LDQvSAxNS0yNSDRgdC8LCDRiNGD0YPRgNCz0LDQvdGLINGD0LvQvNCw0LDRgSDQttCw0LvQs9CwINGB0YPQtNC70LDQsNGAINGF0YPQvdCz0LDRgNC70LDRgdCw0L0uINCc0LDRgtCw0LQsINCl0LDQu9GF0LPQvtC7INGB0YPQvNC00LDQtCDRhdCw0LTQu9Cw0L3Qs9C40LnQvSDQvdOp06nRhiDRgdCw0LnQvSDRgtGD0Lsg0YLRjdC20Y3RjdC7INGF0LDQvdCz0LDQu9GC0YLQsNC5LicsXG4gICAgICBjcml0aWNhbFdhcm5pbmc6IG51bGwsXG4gICAgfSxcbiAgICBoZXJkZXJBZHZpc29yaWVzOiB7XG4gICAgICB1cmdlbnRBY3Rpb25zOiBbXG4gICAgICAgICfQotCw0Lsg0YXRjdGN0YDQuNC50L0g0YbQsNGB0LDQvSDRiNGD0YPRgNCz0LDQvdGLINKv0LXQtCDRhdKv0L0g0LzQsNC7INGC06nTqdC706nRhdOp06nRgSDRgdGN0YDQs9C40LnQu9C2INGF0L7Qu9Cx0L7QviDRhdCw0YDQuNC70YbQsNCw0LMg0YjQsNC70LPQsNGFJyxcbiAgICAgICAgJ9Cl0LDQtNC70LDQvdCz0LjQudC9INOp0LLRgdOp06kg0YbQsNGB0LDQvdC0INC00LDRgNGD0YPQu9Cw0YXQsNCw0YEg0YHRjdGA0LPQuNC50LvQtiDQsdGA0LXQt9C10L3RgtGN0Y3RgCDRhdGD0YfQuNGFJyxcbiAgICAgIF0sXG4gICAgICBncmF6aW5nQWR2aWNlOiAn0KHQsNC70YXQuNC90Ysg0YXSr9GHINC90LDQvNC20LjRhdGL0LMg0YXSr9C70Y3RjdC2INC80LDQu9C70LDRhSwg0YPRg9C00LDQvCDRgtCw0LvQtCDQvNCw0LvRi9CzINGC0LDRgNCw0YXQs9Kv0Lkg0LHQsNGA0LjRhS4nLFxuICAgICAgZmVlZE51dHJpdGlvbkFkdmljZTogJ9CU0L7RgNC90L7QtNGL0L0g0LHQsNC50LPQsNC70LjQudC9INGB0L7RgNCz0L7QsyDRhdCw0LTQu9Cw0L3Qs9C40LnQvSDTqdCy0YHTqdOp0YAg0YXQsNC90LPQsNC70YLRgtCw0Lkg0YLRjdC20Y3RjdGFLicsXG4gICAgICBzaGVsdGVyQ29sZFByb3RlY3Rpb246ICfQpdGN0Y3RgNC40LnQvSDRhdCw0YjQsNCw0L3QtCDRhdGD0L3Qs9Cw0YAg0YLQvtCz0YLQvtGF0L7QvtGBINGB0Y3RgNCz0LjQudC70LYg0YHQsNC70YXQuNC9INGC0LDQu9GL0L0g0YXQsNC80LPQsNCw0LvQsNC70YIg0YXQuNC50YUuJyxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBbXG4gICAgICAgIHsgbmFtZTogJ9CU0L7RgNC90L7QtCDQntCR0JMnLCBwaG9uZTogJzcwNTgtMTA1JyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdkdW5kZ292aScsXG4gICAgc2hhcGVOYW1lOiAnRHVuZGdvdmknLFxuICAgIGlzbzogJ01OLTA1OScsXG4gICAgbmFtZU1uOiAn0JTRg9C90LTQs9C+0LLRjCcsXG4gICAgbmFtZUVuOiAnRHVuZGdvdmknLFxuICAgIGNlbnRlck1uOiAn0JzQsNC90LTQsNC70LPQvtCy0Ywg0YXQvtGCJyxcbiAgICBjZW50ZXJDb29yZGluYXRlczogWzQ1Ljc2MjUsIDEwNi4yNzA4XSxcbiAgICByZWdpb246ICfQotOp0LLQuNC50L0g0LHSr9GBJyxcbiAgICBhcmVhS20yOiA3NDY5MCxcbiAgICBwb3B1bGF0aW9uOiA0NjgwMCxcbiAgICBsaXZlc3RvY2s6IHtcbiAgICAgIHRvdGFsOiAzNTYwMDAwLFxuICAgICAgaG9yc2VzOiAyMTUwMDAsXG4gICAgICBjYXR0bGU6IDE0MjAwMCxcbiAgICAgIGNhbWVsczogNDMwMDAsXG4gICAgICBzaGVlcDogMTcyMDAwMCxcbiAgICAgIGdvYXRzOiAxNDQwMDAwLFxuICAgICAgeWVhckNoYW5nZVBlcmNlbnQ6IC02LjksXG4gICAgICBkZW5zaXR5UGVyU3FLbTogNDcuNyxcbiAgICB9LFxuICAgIHBhc3R1cmU6IHtcbiAgICAgIG92ZXJsb2FkUmF0aW86IDMuMSxcbiAgICAgIHN0YXR1czogJ2NyaXRpY2FsX292ZXJsb2FkJyxcbiAgICAgIHN0YXR1c0xhYmVsOiAn0JTQsNCw0YYgMy3QsNCw0YEg0LTRjdGN0Ygg0LTQsNGF0LjQvSDRhdGN0YLRjdGA0YHRjdC9JyxcbiAgICAgIHlpZWxkQ3d0SGE6IDEuMyxcbiAgICAgIGZvZGRlclByZXBhcmVkUGVyY2VudDogNjUsXG4gICAgICBoYXlQcmVwYXJlZFRvbnM6IDM4MDAwLFxuICAgICAgZ3JhemluZ1ByZXNzdXJlOiAn0J3RjdC9INCw0YfQsNCw0LvQsNC70YLQsNC5JyxcbiAgICB9LFxuICAgIGR6dWRSaXNrOiB7XG4gICAgICBsZXZlbDogJ2NyaXRpY2FsJyxcbiAgICAgIGxldmVsTGFiZWw6ICfQndGN0L0g0LjRhSDRjdGA0YHQtNGN0LvRgtGN0LknLFxuICAgICAgc2NvcmU6IDg5LFxuICAgICAgcHJpbWFyeVR5cGU6ICfQpdCw0LLRgdCw0YDRgdCw0L0g0LfRg9C0JyxcbiAgICAgIHNub3dEZXB0aENtOiAxNixcbiAgICAgIHNub3dDb3ZlclBlcmNlbnQ6IDc5LFxuICAgICAgYWZmZWN0ZWRTb3Vtc0NvdW50OiAxMixcbiAgICAgIHRvdGFsU291bXM6IDE1LFxuICAgICAgc3VtbWFyeTogJ9CX0YPQvSDQvdCw0LzQsNGAINCz0LDQvdGC0LDQuSDQsdCw0LnRgdCw0L0g0LHTqdCz06nTqdC0INOp0LLQu9C40LnQvSDRhtCw0YEg0L3RjdC80Y3Qs9C00Y3QtiDQvNOp0YHTqdC9INCx0q/RgNGF0q/Sr9C7INKv0q/RgdGB0Y3QvS4g06jQu9C30LjQudGCLCDQpdGD0LvQtCwg0K3RgNC00Y3QvdGN0LTQsNC70LDQuSDRgdGD0LzQtNCw0LQg0LHRjdC70YfRjdGN0YDQuNC50L0g0LTQsNCw0YYgMyDQtNCw0YXQuNC9INGF0Y3RgtGN0YDRgdGN0L0uJyxcbiAgICAgIGNyaXRpY2FsV2FybmluZzogJ9Oo0LLRgSDRgtGN0LbRjdGN0LvQuNC50L0g0YPQu9GB0YvQvSDQvdOp06nRhtOp06nRgSDRj9Cw0YDQsNC70YLQsNC5INGC0YPRgdC70LDQvNC20LjQudC9INGG0YPQstCw0LAg0YXSr9GA0LPRjdGFINGI0LDQsNGA0LTQu9Cw0LPQsNGC0LDQuSDQsdCw0LnQvdCwLicsXG4gICAgfSxcbiAgICBoZXJkZXJBZHZpc29yaWVzOiB7XG4gICAgICB1cmdlbnRBY3Rpb25zOiBbXG4gICAgICAgICfQnNCw0LvRh9C00YvQvSDQsdKv0LvQs9GN0Y3RgNGN0Y0g0YXQsNC80YLRgNCw0L0g0YbQsNGBINGF0YPQvdCz0LDRgCDRhtGN0LLRjdGA0LvRjdGFLCDRgdGD0LzRi9C9INGI0YLQsNCx0YIg0YLQvtCz0YLQvNC+0Lsg0LzRjdC00Y3RjSDTqdCz06nRhScsXG4gICAgICAgICfQkdGN0LvRh9GN0Y3RgNC40LnQvSDQtNCw0LDRhiDRhdGN0YLRjdGA0YHRjdC9INGC0YPQuyDRgdGD0Lsg0LTQvtGA0L7QuSDQvNCw0LvRi9CzINGP0LDRgNCw0LvRgtCw0Lkg0LHQvtGA0LvRg9GD0LvQtiDRhtOp06nRgNKv0q/Qu9GN0YUnLFxuICAgICAgICAn0KbQsNGB0LDQvdC0INCx0L7QvtCz0LTRgdC+0L0g0LPRjdGAINCx0q/Quywg0LDRhdC80LDQtCDQvdCw0YHRgtC90YPRg9C00YvQvSDRjdGA0q/Sr9C7INC80Y3QvdC00LjQudC9INCx0LDQudC00LvRi9CzINGI0LDQu9Cz0LDRhScsXG4gICAgICBdLFxuICAgICAgZ3JhemluZ0FkdmljZTogJ9Cl06nRgNC706nRgdOp0L0g0YbQsNGB0YLQsNC5INCz0LDQt9GA0YvQsyDQsNC70LPQsNGB0LDQtiwg06nQstGB0L3QuNC5INC+0YDQvtC5INGG0YPRhdGD0LnRgdCw0L0g0YjQuNC7INC00LDQs9Cw0L0g0LHRjdC70YfRjdGN0YDQu9Kv0q/Qu9GN0YUuJyxcbiAgICAgIGZlZWROdXRyaXRpb25BZHZpY2U6ICfQotGN0LbRjdGN0LvQuNC50L0g0LHRg9C00LDQsNCzINCx0q/Qu9GN0Y3QvSDRg9GB0LDQvdC0INGH0LDQvdCw0LYg0LfRg9GC0LDQvSDQsdCw0LnQtNC70LDQsNGAINCx0L7QsyDQvNCw0LvQtCDQvtC70LPQvtGFLicsXG4gICAgICBzaGVsdGVyQ29sZFByb3RlY3Rpb246ICfQpdCw0YjQsNCw0L3RiyDQsdGD0YPRhtGL0LMg0YXTqdGA06nTqdC006nQvSDQtNGD0LvQsNCw0LvQs9CwINCx0L7Qu9Cz0L7QvSDTqdGA06nRhS4nLFxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IFtcbiAgICAgICAgeyBuYW1lOiAn0JTRg9C90LTQs9C+0LLRjCDQntCR0JMnLCBwaG9uZTogJzcwNTktMTA1JyB9LFxuICAgICAgICB7IG5hbWU6ICfQqNGD0YPRgNGF0LDQuSDRiNGC0LDQsScsIHBob25lOiAnNzA1OS0yMjQwJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICd6YXZraGFuJyxcbiAgICBzaGFwZU5hbWU6ICdaYXZraGFuJyxcbiAgICBpc286ICdNTi0wNTcnLFxuICAgIG5hbWVNbjogJ9CX0LDQstGF0LDQvScsXG4gICAgbmFtZUVuOiAnWmF2a2hhbicsXG4gICAgY2VudGVyTW46ICfQo9C70LjQsNGB0YLQsNC5INGF0L7RgicsXG4gICAgY2VudGVyQ29vcmRpbmF0ZXM6IFs0Ny43NDE3LCA5Ni44NDQ0XSxcbiAgICByZWdpb246ICfQkdCw0YDRg9GD0L0g0LHSr9GBJyxcbiAgICBhcmVhS20yOiA4MjQ1NixcbiAgICBwb3B1bGF0aW9uOiA3MzIwMCxcbiAgICBsaXZlc3RvY2s6IHtcbiAgICAgIHRvdGFsOiAzNjcwMDAwLFxuICAgICAgaG9yc2VzOiAyNDUwMDAsXG4gICAgICBjYXR0bGU6IDI4NTAwMCxcbiAgICAgIGNhbWVsczogODIwMCxcbiAgICAgIHNoZWVwOiAxOTgwMDAwLFxuICAgICAgZ29hdHM6IDExNTE4MDAsXG4gICAgICB5ZWFyQ2hhbmdlUGVyY2VudDogLTUuNixcbiAgICAgIGRlbnNpdHlQZXJTcUttOiA0NC41LFxuICAgIH0sXG4gICAgcGFzdHVyZToge1xuICAgICAgb3ZlcmxvYWRSYXRpbzogMi43LFxuICAgICAgc3RhdHVzOiAnaGlnaF9vdmVybG9hZCcsXG4gICAgICBzdGF0dXNMYWJlbDogJ9CU0LDQsNGGIDItMyDQtNCw0YXQuNC9INGF0Y3RgtGN0YDRgdGN0L0nLFxuICAgICAgeWllbGRDd3RIYTogMi4yLFxuICAgICAgZm9kZGVyUHJlcGFyZWRQZXJjZW50OiA3OSxcbiAgICAgIGhheVByZXBhcmVkVG9uczogODYwMDAsXG4gICAgICBncmF6aW5nUHJlc3N1cmU6ICfQkNGH0LDQsNC70LDQuyDQuNGF0YLRjdC5JyxcbiAgICB9LFxuICAgIGR6dWRSaXNrOiB7XG4gICAgICBsZXZlbDogJ2NyaXRpY2FsJyxcbiAgICAgIGxldmVsTGFiZWw6ICfQndGN0L0g0LjRhSDRjdGA0YHQtNGN0LvRgtGN0LknLFxuICAgICAgc2NvcmU6IDkyLFxuICAgICAgcHJpbWFyeVR5cGU6ICfQptCw0LPQsNCw0L0g0LfRg9C0JyxcbiAgICAgIHNub3dEZXB0aENtOiAzOCxcbiAgICAgIHNub3dDb3ZlclBlcmNlbnQ6IDkyLFxuICAgICAgYWZmZWN0ZWRTb3Vtc0NvdW50OiAxOSxcbiAgICAgIHRvdGFsU291bXM6IDI0LFxuICAgICAgc3VtbWFyeTogJ9Ci0L7RgdC+0L3RhtGN0L3Qs9GN0LssINCi0Y3RgSwg0J7RgtCz0L7QvSDRgdGD0LzQtNCw0LQg0YLQtdC80L/QtdGA0LDRgtGD0YAgLTQ2wrBDINGF0q/RgNGHINGD0LvRgdGL0L0g0YXQsNC80LPQuNC50L0g0YXSr9C50YLRjdC9INGG0Y3QsyDQsdC+0LvQvtCyLiDQptCw0YHQvdGLINC30YPQt9Cw0LDQvSDQtNGD0L3QtNC20LDQsNGAIDM1LTUwINGB0LwsINGF06nQtNOp06nQs9C40LnQvSDQt9Cw0LzRg9GD0LQg0YXQsNCw0LPQtNGB0LDQvS4nLFxuICAgICAgY3JpdGljYWxXYXJuaW5nOiAn0KPRg9C70YvQvSDRgdGD0LzQtNCw0LQg0YbQsNGB0L3RiyDQvdGD0YDQsNC90LPQuCDSr9Kv0YHRjdGFLCDRhdGN0YIg0YXSr9C50YLRgNGN0LvRgiDSr9GA0LPRjdC70LbQu9GN0YUg0YLRg9C7INC+0L3RhtCz0L7QuSDQsNC90YXQsNCw0YDQvdCwINGD0YMuJyxcbiAgICB9LFxuICAgIGhlcmRlckFkdmlzb3JpZXM6IHtcbiAgICAgIHVyZ2VudEFjdGlvbnM6IFtcbiAgICAgICAgJ9Cl0Y3RgiDRhdKv0LnRgtC90LjQuSDTqdC00YDSr9Kv0LTRjdC0INC80LDQu9GL0LMg0YXQvtGC0L3QvtC+0YEg0L7Qs9GCINCz0LDRgNCz0LDRhdCz0q/QuSDRgtGN0LbRjdGN0LvRjdGN0YAg0LHQsNGA0LjRhScsXG4gICAgICAgICfQnNCw0LvRh9C00YvQvSDQs9GN0YAg0YHRg9GD0YbQvdGLINGF0LDQu9Cw0LDQu9GCLCDRgtKv0LvRjdGN0L3QuNC5INC906nTqdGG0LjQudCzINC90LDQudC00LLQsNGA0YLQsNC5INCx0LDQt9Cw0LDRhScsXG4gICAgICAgICfQqNC40L3RjdGN0YAg0YLTqdC70LvTqdGFINC80LDQu9C0INC30L7RgNC40YPQu9GB0LDQvSDQtNGD0LvQsNCw0L0g0L/Sr9C90LcsINGF0LDRiNCw0LDQsyDRg9GA0YzQtNGH0LjQu9Cw0L0g0LHRjdC70YLQs9GN0YUnLFxuICAgICAgXSxcbiAgICAgIGdyYXppbmdBZHZpY2U6ICfQptCw0YEgNDAg0YHQvC3RjdGN0YEg0LTQsNCy0YHQsNC9INCx0q/RgdGN0LQg0LHRjdC70YfRjdGN0YDQu9GN0YUg0LHQvtC70L7QvNC20LPSr9C5INGC0YPQuyDQsdKv0YDRjdC9INGC0Y3QttGN0Y3Qu9C40LnQvSDQs9C+0YDQuNC80LQg0YjQuNC70LbQuNGFLicsXG4gICAgICBmZWVkTnV0cml0aW9uQWR2aWNlOiAn06jQtNOp0YDRgiAyLTMg0YPQtNCw0LDQs9C40LnQvSDQtNCw0LLRgtCw0LzQttGC0LDQudCz0LDQsNGAINCx0q/Qu9GN0Y3QvSDRiNC40L3Qs9GN0L0g0YLRjdC20Y3RjdC7LCDQstC40YLQsNC80LjQvSDQkCwg0JQg0LTRg9GB0LDQsNC2INOp0LPTqdGFLicsXG4gICAgICBzaGVsdGVyQ29sZFByb3RlY3Rpb246ICfQpdCw0YjQsNCwINGF0L7RgNC+0L7QvdC0INC90Y3QvNGN0LvRgiDRgdKv0YDQu9GN0L0g0LTRjdCy0YHQs9GN0YAg0YXQuNC50LYsINC80LDQu9GL0L0g0LPRjdC00Y3RgSDRhdOp0YDTqdGF06nTqdGBINGF0LDQvNCz0LDQsNC70LDRhS4nLFxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IFtcbiAgICAgICAgeyBuYW1lOiAn0JfQsNCy0YXQsNC9INCe0JHQkycsIHBob25lOiAnNzAzOC0xMDUnIH0sXG4gICAgICAgIHsgbmFtZTogJ9CQ0LnQvNCz0LjQudC9INCo0YPRg9GA0YXQsNC5JywgcGhvbmU6ICc3MDM4LTIzMjMnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ29ya2hvbicsXG4gICAgc2hhcGVOYW1lOiAnT3JraG9uJyxcbiAgICBpc286ICdNTi0wMzUnLFxuICAgIG5hbWVNbjogJ9Ce0YDRhdC+0L0nLFxuICAgIG5hbWVFbjogJ09ya2hvbicsXG4gICAgY2VudGVyTW46ICfQrdGA0LTRjdC90Y3RgiDRhdC+0YInLFxuICAgIGNlbnRlckNvb3JkaW5hdGVzOiBbNDkuMDI3OCwgMTA0LjA4MzNdLFxuICAgIHJlZ2lvbjogJ9Ci06nQstC40LnQvSDQsdKv0YEnLFxuICAgIGFyZWFLbTI6IDg0NCxcbiAgICBwb3B1bGF0aW9uOiAxMDgwMDAsXG4gICAgbGl2ZXN0b2NrOiB7XG4gICAgICB0b3RhbDogMzEyMDAwLFxuICAgICAgaG9yc2VzOiAyNTAwMCxcbiAgICAgIGNhdHRsZTogNTgwMDAsXG4gICAgICBjYW1lbHM6IDEwMCxcbiAgICAgIHNoZWVwOiAxMzkwMDAsXG4gICAgICBnb2F0czogODk5MDAsXG4gICAgICB5ZWFyQ2hhbmdlUGVyY2VudDogKzAuNCxcbiAgICAgIGRlbnNpdHlQZXJTcUttOiAzNjkuNyxcbiAgICB9LFxuICAgIHBhc3R1cmU6IHtcbiAgICAgIG92ZXJsb2FkUmF0aW86IDIuOSxcbiAgICAgIHN0YXR1czogJ2hpZ2hfb3ZlcmxvYWQnLFxuICAgICAgc3RhdHVzTGFiZWw6ICfQlNCw0LDRhiAyLTMg0LTQsNGF0LjQvSDRhdGN0YLRjdGA0YHRjdC9JyxcbiAgICAgIHlpZWxkQ3d0SGE6IDMuNCxcbiAgICAgIGZvZGRlclByZXBhcmVkUGVyY2VudDogOTIsXG4gICAgICBoYXlQcmVwYXJlZFRvbnM6IDIyMDAwLFxuICAgICAgZ3JhemluZ1ByZXNzdXJlOiAn0JDRh9Cw0LDQu9Cw0Lsg0LjRhdGC0Y3QuScsXG4gICAgfSxcbiAgICBkenVkUmlzazoge1xuICAgICAgbGV2ZWw6ICdsb3cnLFxuICAgICAgbGV2ZWxMYWJlbDogJ9CR0LDQs9CwINGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogMzgsXG4gICAgICBwcmltYXJ5VHlwZTogJ9Cm0LDQs9Cw0LDQvSDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDE2LFxuICAgICAgc25vd0NvdmVyUGVyY2VudDogNzAsXG4gICAgICBhZmZlY3RlZFNvdW1zQ291bnQ6IDEsXG4gICAgICB0b3RhbFNvdW1zOiAyLFxuICAgICAgc3VtbWFyeTogJ9CT0LDQt9Cw0YAg0L3Rg9GC0LDQsyDQsdCw0LPQsNGC0LDQuSDRhyDQtNGN0LQg0LHSr9GC0Y3Rhiwg0YLTqdCyINGB0YPRg9GA0LjQvSDRgdCw0LnRgtCw0Lkg0YLRg9C7INC30YPQtNGL0L0g0Y3RgNGB0LTRjdC7INGF0LDRgNGM0YbQsNC90LPRg9C5INC00L7QvtCz0YPRg9GAINCx0LDQudC90LAuJyxcbiAgICAgIGNyaXRpY2FsV2FybmluZzogbnVsbCxcbiAgICB9LFxuICAgIGhlcmRlckFkdmlzb3JpZXM6IHtcbiAgICAgIHVyZ2VudEFjdGlvbnM6IFtcbiAgICAgICAgJ9Cl0L7RgiDRgdGD0YPRgNC40L0g0LPQsNC30YDRi9C9INCx0Y3Qu9GH0Y3RjdGA0LjQudC9INGF0Y3RgiDRgtOp0LLQu9Op0YDQu9C40LnQsyDRgdCw0LDRgNGD0YPQu9Cw0YUnLFxuICAgICAgICAn0q7QudC70LTQstGN0YDQu9GN0LvQuNC50L0g0YXQsNGP0LPQtNCw0LssINGC0Y3QttGN0Y3Qu9C40LnQvSDQvdC40LnQu9Kv0q/Qu9GN0LvRgtC40LnQsyDRgdCw0LnQttGA0YPRg9C70LDRhScsXG4gICAgICBdLFxuICAgICAgZ3JhemluZ0FkdmljZTogJ9Cl0L7RgiDQvtGA0YfQvNGL0L0g0LfQsNCw0LPQu9Cw0YHQsNC9INCx0q/RgdGN0LQg0YXRg9Cy0LDQsNGA0YzRgtCw0Lkg0LHRjdC70YfRjdGN0YDQu9Kv0q/Qu9GN0YUuJyxcbiAgICAgIGZlZWROdXRyaXRpb25BZHZpY2U6ICfQrdGA0LTRjdC90Y3RgiDRhdC+0YLRi9C9INKv0LnQu9C00LLRjdGA0q/Sr9C00LjQudC9INGC0Y3QttGN0Y3Qu9C40LnQvSDQvdOp06nRhtC40LnQsyDQsNGI0LjQs9C70LDRhS4nLFxuICAgICAgc2hlbHRlckNvbGRQcm90ZWN0aW9uOiAn0KXQsNGI0LDQsCDRhdC+0YDQvtC+0L3RiyDRhtGN0LLRjdGA0LvRjdCz0Y3RjSwg0YXQsNC70LTQstCw0YDQs9Kv0LnQttKv0q/Qu9GN0LvRgiDRhdC40LnRhS4nLFxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IFtcbiAgICAgICAgeyBuYW1lOiAn0J7RgNGF0L7QvSDQntCR0JMnLCBwaG9uZTogJzcwMzUtMTA1JyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdvdm9ya2hhbmdhaScsXG4gICAgc2hhcGVOYW1lOiAnw5Z2w7Zya2hhbmdhaScsXG4gICAgaXNvOiAnTU4tMDU1JyxcbiAgICBuYW1lTW46ICfTqNCy06nRgNGF0LDQvdCz0LDQuScsXG4gICAgbmFtZUVuOiAnT3ZvcmtoYW5nYWknLFxuICAgIGNlbnRlck1uOiAn0JDRgNCy0LDQudGF0Y3RjdGAINGF0L7RgicsXG4gICAgY2VudGVyQ29vcmRpbmF0ZXM6IFs0Ni4yNjM5LCAxMDIuNzc1XSxcbiAgICByZWdpb246ICfQpdCw0L3Qs9Cw0LnQvSDQsdKv0YEnLFxuICAgIGFyZWFLbTI6IDYyODk1LFxuICAgIHBvcHVsYXRpb246IDExNjgwMCxcbiAgICBsaXZlc3RvY2s6IHtcbiAgICAgIHRvdGFsOiA1MTIwMDAwLFxuICAgICAgaG9yc2VzOiA0MjAwMDAsXG4gICAgICBjYXR0bGU6IDUxMDAwMCxcbiAgICAgIGNhbWVsczogMjQwMDAsXG4gICAgICBzaGVlcDogMjQ1MDAwMCxcbiAgICAgIGdvYXRzOiAxNzE2MDAwLFxuICAgICAgeWVhckNoYW5nZVBlcmNlbnQ6IC01LjksXG4gICAgICBkZW5zaXR5UGVyU3FLbTogODEuNCxcbiAgICB9LFxuICAgIHBhc3R1cmU6IHtcbiAgICAgIG92ZXJsb2FkUmF0aW86IDMuMyxcbiAgICAgIHN0YXR1czogJ2NyaXRpY2FsX292ZXJsb2FkJyxcbiAgICAgIHN0YXR1c0xhYmVsOiAn0JTQsNCw0YYgMy3QsNCw0YEg0LTRjdGN0Ygg0LTQsNGF0LjQvSDRhdGN0YLRjdGA0YHRjdC9JyxcbiAgICAgIHlpZWxkQ3d0SGE6IDIuMCxcbiAgICAgIGZvZGRlclByZXBhcmVkUGVyY2VudDogNzMsXG4gICAgICBoYXlQcmVwYXJlZFRvbnM6IDk1MDAwLFxuICAgICAgZ3JhemluZ1ByZXNzdXJlOiAn0J3RjdC9INCw0YfQsNCw0LvQsNC70YLQsNC5JyxcbiAgICB9LFxuICAgIGR6dWRSaXNrOiB7XG4gICAgICBsZXZlbDogJ2NyaXRpY2FsJyxcbiAgICAgIGxldmVsTGFiZWw6ICfQndGN0L0g0LjRhSDRjdGA0YHQtNGN0LvRgtGN0LknLFxuICAgICAgc2NvcmU6IDkwLFxuICAgICAgcHJpbWFyeVR5cGU6ICfQpdCw0LLRgdCw0YDRgdCw0L0g0LfRg9C0JyxcbiAgICAgIHNub3dEZXB0aENtOiAyOSxcbiAgICAgIHNub3dDb3ZlclBlcmNlbnQ6IDg4LFxuICAgICAgYWZmZWN0ZWRTb3Vtc0NvdW50OiAxNixcbiAgICAgIHRvdGFsU291bXM6IDE5LFxuICAgICAgc3VtbWFyeTogJ9Cl0LDQudGA0YXQsNC90LTRg9C70LDQsNC9LCDQkdCw0YDRg9GD0L3QsdCw0Y/QvS3Qo9C70LDQsNC9LCDQkdC+0LPQtCwg0JHQsNGCLdOo0LvQt9C40Lkg0YHRg9C80LTQsNC0INGG0LDRgdC90Ysg0LfRg9C30LDQsNC9IDMwLTQwINGB0Lwg0YXSr9GA0Ycg0L3Rj9Cz0YLQsNGA0YHQsNC9LiDQkdGN0LvRh9GN0Y3RgNC40LnQvSDQtNCw0LDRhiDQvtC90YbQs9C+0Lkg0YXRjdGC0Y3RgNGB0Y3QvSDRgtGD0Lsg0LzQsNC70YvQvSDRhdC+0YDQvtCz0LTQvtC7INC90Y3QvNGN0LPQtNGN0YUg0YLTqdC706nQstGC0Y3QuS4nLFxuICAgICAgY3JpdGljYWxXYXJuaW5nOiAn0KXQsNC90LPQsNC50L0g06nQvdC006nRgCDRg9GD0LvRi9C9INCx0q/RgdGN0LQg0LzQsNC70YfQuNC9INOp0YDRhdKv0q/QtCDRhtCw0YHQsNC90LQg0YLRg9GB0LPQsNCw0YDQu9Cw0LPQtNCw0LDQtCDQsdCw0LnQvdCwLicsXG4gICAgfSxcbiAgICBoZXJkZXJBZHZpc29yaWVzOiB7XG4gICAgICB1cmdlbnRBY3Rpb25zOiBbXG4gICAgICAgICfQotGD0YHQs9Cw0LDRgNC70LDQs9C00YHQsNC9INOp0YDRhdKv0q/QtNC40LnQvSDQt9Cw0LzRi9CzINC30LDQvCDRgtGN0Y3QstGA0LjQudC9INGC0LXRhdC90LjQutGN0Y3RgCDQvdGN0Y3RhdGN0LQg0LzRjdC00Y3RjdC70Y3QuyDTqdCz06nRhScsXG4gICAgICAgICfQodGD0LzRi9C9INGC06nQstC40LnQvSDTqdCy0YHQvdC40Lkg0L3TqdOp0YbQuNC50LMg0YXRg9Cy0LDQsNGA0LjQu9Cw0L0g0YLQsNGC0LDQvSDQsNCy0LDRhScsXG4gICAgICAgICfQrdGFINC80LDQuywg0YLTqdC70LvTqdGFINCx0L7Qs9C40LnQsyDQtNGD0LvQsNCw0L0g0YXQsNGI0LDQsNC90LQg0YLRg9GB0LDQtCDQvdGMINCx0LDQudGA0YjRg9GD0LvQsNGFJyxcbiAgICAgIF0sXG4gICAgICBncmF6aW5nQWR2aWNlOiAn0KPRg9C70YvQvSDRhtCw0YEg0LjRhdGC0Y3QuSDRjdC90LPRjdGA0Y3RjdGBINC30LDQudC70YHRhdC40LnQtiwg0LfTqdCy0YXTqdC9INGG0Y3QstGN0YDQu9GN0YHRjdC9INC30LDQvCDRhdCw0YDQs9GD0LnQs9Cw0LDRgCDQvtC50YDRi9C9INC30LDQudC0INCx0Y3Qu9GH0Y3RjdGFLicsXG4gICAgICBmZWVkTnV0cml0aW9uQWR2aWNlOiAn0K3RgNC00Y3RgSDRhdKv0YfQuNGCINGC0Y3QttGN0Y3Quywg0YjQsNGAINGB0q/Sr9C90LjQuSDQt9GD0YLQsNC9INOp0LPRhyDQtNCw0YDRhdC70LDQsNCzINC00Y3QvNC20LjRhS4nLFxuICAgICAgc2hlbHRlckNvbGRQcm90ZWN0aW9uOiAn0KXQsNGI0LDQsCDRhdC+0YDQvtC+0L3RiyDRiNCw0LvRi9CzINC30YPQt9Cw0LDQvSDRhdC+0YDQs9C+0Lsg0LHRg9GD0YbQsNCw0YAg0YXRg9GH0LjRhS4nLFxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IFtcbiAgICAgICAgeyBuYW1lOiAn06jQstOp0YDRhdCw0L3Qs9Cw0Lkg0J7QkdCTJywgcGhvbmU6ICc3MDMyLTEwNScgfSxcbiAgICAgICAgeyBuYW1lOiAn0JDQudC80LPQuNC50L0g0KXQpdCQ0JDQkycsIHBob25lOiAnNzAzMi0yNDMyJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdvbW5vZ292aScsXG4gICAgc2hhcGVOYW1lOiAnw5ZtbsO2Z292aScsXG4gICAgaXNvOiAnTU4tMDUzJyxcbiAgICBuYW1lTW46ICfTqNC80L3TqdCz0L7QstGMJyxcbiAgICBuYW1lRW46ICdPbW5vZ292aScsXG4gICAgY2VudGVyTW46ICfQlNCw0LvQsNC90LfQsNC00LPQsNC0INGF0L7RgicsXG4gICAgY2VudGVyQ29vcmRpbmF0ZXM6IFs0My41NzA4LCAxMDQuNDI1XSxcbiAgICByZWdpb246ICfQotOp0LLQuNC50L0g0LHSr9GBJyxcbiAgICBhcmVhS20yOiAxNjUzODAsXG4gICAgcG9wdWxhdGlvbjogNzI0MDAsXG4gICAgbGl2ZXN0b2NrOiB7XG4gICAgICB0b3RhbDogMjY4MDAwMCxcbiAgICAgIGhvcnNlczogMTIyMDAwLFxuICAgICAgY2F0dGxlOiA2ODAwMCxcbiAgICAgIGNhbWVsczogMTQ4MDAwLFxuICAgICAgc2hlZXA6IDgyMDAwMCxcbiAgICAgIGdvYXRzOiAxNTIyMDAwLFxuICAgICAgeWVhckNoYW5nZVBlcmNlbnQ6IC0zLjgsXG4gICAgICBkZW5zaXR5UGVyU3FLbTogMTYuMixcbiAgICB9LFxuICAgIHBhc3R1cmU6IHtcbiAgICAgIG92ZXJsb2FkUmF0aW86IDIuNSxcbiAgICAgIHN0YXR1czogJ2hpZ2hfb3ZlcmxvYWQnLFxuICAgICAgc3RhdHVzTGFiZWw6ICfQlNCw0LDRhiAyLTMg0LTQsNGF0LjQvSDRhdGN0YLRjdGA0YHRjdC9JyxcbiAgICAgIHlpZWxkQ3d0SGE6IDAuOSxcbiAgICAgIGZvZGRlclByZXBhcmVkUGVyY2VudDogODEsXG4gICAgICBoYXlQcmVwYXJlZFRvbnM6IDMyMDAwLFxuICAgICAgZ3JhemluZ1ByZXNzdXJlOiAn0JDRh9Cw0LDQu9Cw0Lsg0LjRhdGC0Y3QuScsXG4gICAgfSxcbiAgICBkenVkUmlzazoge1xuICAgICAgbGV2ZWw6ICdoaWdoJyxcbiAgICAgIGxldmVsTGFiZWw6ICfQmNGFINGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogNzcsXG4gICAgICBwcmltYXJ5VHlwZTogJ9Cl0LDRgCDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDksXG4gICAgICBzbm93Q292ZXJQZXJjZW50OiA0MixcbiAgICAgIGFmZmVjdGVkU291bXNDb3VudDogMTAsXG4gICAgICB0b3RhbFNvdW1zOiAxNSxcbiAgICAgIHN1bW1hcnk6ICfQptCw0YEg0LHQsNGA0LDQsyDQvtGA0L7QvtCz0q/QuSDQsdC+0LvQvtCy0Ycg06nQstOp0Lsg0LfRg9C90Ysg0YXRg9GAINGC0YPQvdCw0LTQsNGBINC00YPRgtCw0LPQtNGB0LDQvdCw0LDRgSDQsdGN0LvRh9GN0Y3RgCDSr9Cz0q/QuSDQsdC+0LvQtiwg0YXRg9C00LDQsyDRg9GBINGF06nQu9C00YHTqdC9INGF0LDRgCDQt9GD0LTRi9C9INC906nRhdGG06nQuyDQt9C+0L3RhdC40LvQtiDQsdCw0LnQvdCwLicsXG4gICAgICBjcml0aWNhbFdhcm5pbmc6ICfQk9GD0YDQstCw0L3RgtGN0YEsINCd0L7RkdC9LCDQodGN0LLRgNGN0Lkg0YHRg9C80LTQsNC0INGB0LDQu9GF0LjQvdGLINGF0YPRgNC0IDI1INC8L9GBINGF0q/RgNGHINGD0LvQsNCw0L0g0YjQvtGA0L7QvtC9INCx0LAg0YXSr9C50YLRjdC9INGI0YPRg9GA0LPQsCDQsNGO0YPQuyDRgtCw0YDRjNC2INCx0L7Qu9C30L7RiNCz0q/QuS4nLFxuICAgIH0sXG4gICAgaGVyZGVyQWR2aXNvcmllczoge1xuICAgICAgdXJnZW50QWN0aW9uczogW1xuICAgICAgICAn0KjQvtGA0L7QvtC9INCx0LAg0YbQsNGB0LDQvSDRiNGD0YPRgNCz0LDQvdGLINKv0LXQtCDRgtGN0LzRjdGN0L0g0YHSr9GA0LPQuNC50LMg0YXRjdCy0YLRjdGIINGB0LDQudGC0LDQuSDRhdC+0L7Qu9C+0Lkg0YDRg9GDINCx0YPRg9C70LPQsNGFJyxcbiAgICAgICAgJ9Cj0YHQvdGLINCz0q/QvdC40Lkg0YXRg9C00LDQsywg0L3QsNGA0L3RiyDQvdCw0YHQvtGB0L3RiyDRhdOp0LvQtNOp0LvRgtOp06nRgSDRgdGN0YDQs9C40LnQu9C2INC00YPQu9Cw0LDQu9Cz0YvQvSDQsdKv0YDRhdKv0q/QuyDRhdC40LnRhScsXG4gICAgICAgICfQotGN0LbRjdGN0Lsg0LTRg9GC0LDQs9C00YHQsNC9INGP0LzQsNCw0L0g0YHSr9GA0Y3Qs9GCINGN0YDQtNGN0YEg0LLQuNGC0LDQvNC40L3RiyDQvdGN0LzRjdCz0LTRjdC7INC+0LvQs9C+0YUnLFxuICAgICAgXSxcbiAgICAgIGdyYXppbmdBZHZpY2U6ICfQk9C+0LLQuNC50L0g0YPRg9C70YHRi9C9INC906nQvNOp0YAg0L3TqdOp0LvTqdCzLCDQt9Cw0LPQsNC9INGC06nQs9Op0LvQtCDRgtC+0LPRgtC+0L7QvSDQsdGN0LvRh9GN0Y3RgNC70q/Sr9C70Y3RhS4nLFxuICAgICAgZmVlZE51dHJpdGlvbkFkdmljZTogJ9Co0LDRgCDQsdGD0YPRgNGG0LDQs9C90Ysg0YjQsNGF0LTQsNGBLCDRgtGN0LbRjdGN0LvQuNC50L0g0LHRg9GD0LTQsNC50LMg06nQtNOp0YDRgiDQsdCw0LPQsCDRgtGD0L3Qs9Cw0LDRgCDQtNCw0LLRgtCw0LzQttGC0LDQuSDTqdCz06nRhS4nLFxuICAgICAgc2hlbHRlckNvbGRQcm90ZWN0aW9uOiAn0KXQsNGI0LDQsNCzINGH0YPQu9GD0YMsINGI0L7RgNC+0L7QvSDQtNCw0LvQsNC90LPQsNCw0YAg0LTQsNCy0YXQsNGA0LvQsNC9INGB0LDQu9GF0LjQvdCw0LDRgSDRhdCw0LvRhdC70LDRhS4nLFxuICAgICAgZW1lcmdlbmN5Q29udGFjdHM6IFtcbiAgICAgICAgeyBuYW1lOiAn06jQvNC906nQs9C+0LLRjCDQntCR0JMnLCBwaG9uZTogJzcwNTMtMTA1JyB9LFxuICAgICAgICB7IG5hbWU6ICfQqNGD0YPRgNGF0LDQuSDQsNC70LHQsCcsIHBob25lOiAnNzA1My0yMjIyJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdzdWtoYmFhdGFyJyxcbiAgICBzaGFwZU5hbWU6ICdTw7xraGJhYXRhcicsXG4gICAgaXNvOiAnTU4tMDUxJyxcbiAgICBuYW1lTW46ICfQodKv0YXQsdCw0LDRgtCw0YAnLFxuICAgIG5hbWVFbjogJ1N1a2hiYWF0YXInLFxuICAgIGNlbnRlck1uOiAn0JHQsNGA0YPRg9C9LdCj0YDRgiDRhdC+0YInLFxuICAgIGNlbnRlckNvb3JkaW5hdGVzOiBbNDYuNjgwNiwgMTEzLjI4MDZdLFxuICAgIHJlZ2lvbjogJ9CX0q/Sr9C9INCx0q/RgScsXG4gICAgYXJlYUttMjogODIyODcsXG4gICAgcG9wdWxhdGlvbjogNjQxMDAsXG4gICAgbGl2ZXN0b2NrOiB7XG4gICAgICB0b3RhbDogNDQyMDAwMCxcbiAgICAgIGhvcnNlczogNDgwMDAwLFxuICAgICAgY2F0dGxlOiA0MTAwMDAsXG4gICAgICBjYW1lbHM6IDE0MjAwLFxuICAgICAgc2hlZXA6IDIwMTAwMDAsXG4gICAgICBnb2F0czogMTUwNTgwMCxcbiAgICAgIHllYXJDaGFuZ2VQZXJjZW50OiAtOC41LFxuICAgICAgZGVuc2l0eVBlclNxS206IDUzLjcsXG4gICAgfSxcbiAgICBwYXN0dXJlOiB7XG4gICAgICBvdmVybG9hZFJhdGlvOiAzLjUsXG4gICAgICBzdGF0dXM6ICdjcml0aWNhbF9vdmVybG9hZCcsXG4gICAgICBzdGF0dXNMYWJlbDogJ9CU0LDQsNGGIDMt0LDQsNGBINC00Y3RjdGIINC00LDRhdC40L0g0YXRjdGC0Y3RgNGB0Y3QvScsXG4gICAgICB5aWVsZEN3dEhhOiAxLjgsXG4gICAgICBmb2RkZXJQcmVwYXJlZFBlcmNlbnQ6IDY2LFxuICAgICAgaGF5UHJlcGFyZWRUb25zOiA3MjAwMCxcbiAgICAgIGdyYXppbmdQcmVzc3VyZTogJ9Cd0Y3QvSDQsNGH0LDQsNC70LDQu9GC0LDQuScsXG4gICAgfSxcbiAgICBkenVkUmlzazoge1xuICAgICAgbGV2ZWw6ICdjcml0aWNhbCcsXG4gICAgICBsZXZlbExhYmVsOiAn0J3RjdC9INC40YUg0Y3RgNGB0LTRjdC70YLRjdC5JyxcbiAgICAgIHNjb3JlOiA5NSxcbiAgICAgIHByaW1hcnlUeXBlOiAn0KLTqdC806nRgCDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDM0LFxuICAgICAgc25vd0NvdmVyUGVyY2VudDogOTUsXG4gICAgICBhZmZlY3RlZFNvdW1zQ291bnQ6IDEzLFxuICAgICAgdG90YWxTb3VtczogMTMsXG4gICAgICBzdW1tYXJ5OiAn0JDQudC80LPQuNC50L0g0L3QuNC50YIg0L3Rg9GC0LPQsNCw0YAg0YbQsNGBINC+0YDQtiDRhdCw0LnQu9GB0L3RiyDQtNCw0YDQsNCwINC+0LPRhtC+0Lwg0YXSr9C50YLRjdGA0YHQvdGN0Y3RgSAyLTUg0YHQvCDQt9GD0LfQsNCw0L0g0LzTqdGB06nQvSDQsdKv0YDRhdKv0q/QuyDRgtC+0LPRgtC+0LYsINC80LDQuyDTqdCy0YHTqdOpINC40LTRjdC2INGH0LDQtNCw0YXQs9Kv0Lkg0YLTqdC806nRgCDQt9GD0LQg0q/Sr9GB0YHRjdC9LiAxMyDRgdGD0Lwg0LHSr9Cz0LQg0L3RjdGA0LLRjdCz0LTRjdGN0LQg0LHQsNC50L3QsC4nLFxuICAgICAgY3JpdGljYWxXYXJuaW5nOiAn0J7QvdGG0LPQvtC5INCz0LDQvNGI0LPQuNC50L0g0L3TqdGF0YbTqdC7INCx0LDQudC00LDQuyDSr9Kv0YHRgdGN0L0g0YLRg9C7INGC06nRgNC40LnQvSDQvdOp06nRhtOp06nRgSDTqdCy0YEg0YLRjdC20Y3RjdC7LCDRiNCw0YLQsNGF0YPRg9C90Ysg0YLRg9GB0LvQsNC80LYg0YLQsNGB0YDQsNC70YLQs9Kv0Lkg0YjQsNCw0YDQtNC70LDQs9Cw0YLQsNC5LicsXG4gICAgfSxcbiAgICBoZXJkZXJBZHZpc29yaWVzOiB7XG4gICAgICB1cmdlbnRBY3Rpb25zOiBbXG4gICAgICAgICfQnNOp0YHTqdC9INCx0q/RgNGF0q/Sr9C7INGF0LDQs9Cw0LvQsNGFINGC0LXRhdC90LjQuiAo0YLRgNCw0LrRgtC+0YAsINGH0LjRgNGN0LPRhykt0Y3RjdGAINCx0Y3Qu9GH0Y3RjdGA0LjQudC9INGG0LDRgdGL0LMg0YHQsNGA0L3QuNGD0LvQsNGFJyxcbiAgICAgICAgJ9Cl06nQuyDQvdGMINGF0LDQu9GG0LDRgNGB0LDQvSDQvNCw0LvQtCDQsNC90YLQuNCx0LjQvtGC0LjQuiwg0YjQsNGA0YXQvdGLINGC0L7RgSDRgtKv0YDRhdGN0YUnLFxuICAgICAgICAn0JHSr9GFINCx0L7QsyDQvNCw0LvRi9CzINOp0LTTqdGAINCx0q/RgCAxMDAlINGF0LDRiNCw0LDQvdC0INC90Ywg0YLRjdC20Y3RjdGFINCz0L7RgNC40LzQtCDRiNC40LvQttKv0q/Qu9GN0YUnLFxuICAgICAgXSxcbiAgICAgIGdyYXppbmdBZHZpY2U6ICfQnNOp0YHRgtGB06nQvSDQsdGN0LvRh9GN0Y3RgNGCINC80LDQuyDQsdGN0LvRh9GN0Y3RhdC40LnQsyDQt9C+0LPRgdC+0L7Qtiwg0YXTqdC7INC00L7RgNC+0LnRgtC+0YXQvtC+0YEg0YHRjdGA0LPQuNC50LvRjdGFLicsXG4gICAgICBmZWVkTnV0cml0aW9uQWR2aWNlOiAn0K3RgNC00Y3RgSDRhdKv0YfQuNGCINGC0Y3QttGN0Y3Quywg0L3QvtCz0L7QvtC9INGC0Y3QttGN0Y3Quywg0LfRg9GC0LDQvSDRgtGN0LbRjdGN0LvQuNC50LMg06nQtNOp0YDRgiAzINGD0LTQsNCwINOp0LPTqdGFLicsXG4gICAgICBzaGVsdGVyQ29sZFByb3RlY3Rpb246ICfQpdCw0YjQsNCw0L3RiyDQvNOp0YHQuNC50LMg0YXQvtCy0YXQvtC70LYg0YXRg9GD0YDQsNC5INCx0YPRg9GGLCDQvNC+0LTQvdGLINKv0YDRgtGN0YEg0LTRjdCy0YHRjdGFLicsXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogW1xuICAgICAgICB7IG5hbWU6ICfQodKv0YXQsdCw0LDRgtCw0YAg0J7QkdCTJywgcGhvbmU6ICc3MDUxLTEwNScgfSxcbiAgICAgICAgeyBuYW1lOiAn0JPQsNC80YjQs9C40LnQvSDRiNGD0YPRgNGF0LDQuSDRiNGC0LDQsScsIHBob25lOiAnNzA1MS0yNDI0JyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdzZWxlbmdlJyxcbiAgICBzaGFwZU5hbWU6ICdTZWxlbmdlJyxcbiAgICBpc286ICdNTi0wNDknLFxuICAgIG5hbWVNbjogJ9Ch0Y3Qu9GN0L3Qs9GNJyxcbiAgICBuYW1lRW46ICdTZWxlbmdlJyxcbiAgICBjZW50ZXJNbjogJ9Ch0q/RhdCx0LDQsNGC0LDRgCDRhdC+0YInLFxuICAgIGNlbnRlckNvb3JkaW5hdGVzOiBbNTAuMjMxNCwgMTA2LjIwODNdLFxuICAgIHJlZ2lvbjogJ9Ci06nQstC40LnQvSDQsdKv0YEnLFxuICAgIGFyZWFLbTI6IDQxMTUzLFxuICAgIHBvcHVsYXRpb246IDEwOTIwMCxcbiAgICBsaXZlc3RvY2s6IHtcbiAgICAgIHRvdGFsOiAxOTgwMDAwLFxuICAgICAgaG9yc2VzOiAxNDgwMDAsXG4gICAgICBjYXR0bGU6IDMxMjAwMCxcbiAgICAgIGNhbWVsczogNzAwLFxuICAgICAgc2hlZXA6IDk1MDAwMCxcbiAgICAgIGdvYXRzOiA1NjkzMDAsXG4gICAgICB5ZWFyQ2hhbmdlUGVyY2VudDogKzAuOCxcbiAgICAgIGRlbnNpdHlQZXJTcUttOiA0OC4xLFxuICAgIH0sXG4gICAgcGFzdHVyZToge1xuICAgICAgb3ZlcmxvYWRSYXRpbzogMS4zLFxuICAgICAgc3RhdHVzOiAnbW9kZXJhdGVfb3ZlcmxvYWQnLFxuICAgICAgc3RhdHVzTGFiZWw6ICfQlNCw0LDRhiAxLTIg0LTQsNGF0LjQvSDRhdGN0YLRjdGA0YHRjdC9JyxcbiAgICAgIHlpZWxkQ3d0SGE6IDQuMixcbiAgICAgIGZvZGRlclByZXBhcmVkUGVyY2VudDogOTYsXG4gICAgICBoYXlQcmVwYXJlZFRvbnM6IDE5NTAwMCxcbiAgICAgIGdyYXppbmdQcmVzc3VyZTogJ9Cl0Y3QstC40LnQvScsXG4gICAgfSxcbiAgICBkenVkUmlzazoge1xuICAgICAgbGV2ZWw6ICdsb3cnLFxuICAgICAgbGV2ZWxMYWJlbDogJ9CR0LDQs9CwINGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogMjgsXG4gICAgICBwcmltYXJ5VHlwZTogJ9Cm0LDQs9Cw0LDQvSDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDE0LFxuICAgICAgc25vd0NvdmVyUGVyY2VudDogNjIsXG4gICAgICBhZmZlY3RlZFNvdW1zQ291bnQ6IDIsXG4gICAgICB0b3RhbFNvdW1zOiAxNyxcbiAgICAgIHN1bW1hcnk6ICfQkNGC0YDRi9C9INC90YPRgtCw0LMg0YLRg9C7INGD0YDQs9Cw0YYg0LDRgNCy0LjQvSwg06nQstGBINGC0Y3QttGN0Y3Qu9C40LnQvSDQvdOp06nRhiDRg9C70YHQtNCw0LAg0YXQsNC80LPQuNC50L0g06nQvdC006nRgC4g06jQstOp0LvQttC40LvRgiDRgtC+0LPRgtCy0L7RgNGC0L7QuSwg0Y3RgNGB0LTRjdC7INCx0LDQs9Cw0YLQsNC5INCx0LDQudC90LAuJyxcbiAgICAgIGNyaXRpY2FsV2FybmluZzogbnVsbCxcbiAgICB9LFxuICAgIGhlcmRlckFkdmlzb3JpZXM6IHtcbiAgICAgIHVyZ2VudEFjdGlvbnM6IFtcbiAgICAgICAgJ9Ce0YDQvtC9INC90YPRgtCz0LjQudC9INGC0Y3QttGN0Y3Qu9C40LnQvSDQsdCw0LDQt9Cw0LDRgSDQsdGD0YHQsNC0INGF06nRgNGIINCw0LnQvNCz0YPRg9C00LDQtCDRgtGN0LbRjdGN0Lsg0Y3QutGB0L/QvtGA0YLQu9C+0YUg0LHRjdC70YLQs9GN0Lsg0YXQsNC90LPQsNGFJyxcbiAgICAgICAgJ9Ci0LDQu9Cx0LDQudC9INGB0q/RgNC70LjQudCzINCw0YDQuNGD0YLQs9Cw0L0g0LzQsNC70YvQvSDRgtGN0LbRjdGN0LvQtCDQsdGN0LvRgtCz0Y3RhScsXG4gICAgICBdLFxuICAgICAgZ3JhemluZ0FkdmljZTogJ9Ce0LnQvSDQt9Cw0YXRi9C9INGB06nTqdCz0YIg0LHRjdC70YfRjdGN0YAg0LHQvtC70L7QvSDRgtCw0YDQuNC80LDQuyDRgtCw0LvQsdCw0LnQtCDRgtC+0LPRgtC80L7QuyDQvNCw0LvQu9Cw0YUuJyxcbiAgICAgIGZlZWROdXRyaXRpb25BZHZpY2U6ICfSrtGAINGC0LDRgNC40LDQvdGLINCx0LDRj9C20YPRg9C70YHQsNC9INGF0LjQstGN0LMsINGI0LDRgCDQsdGD0YPRgNGG0LDQs9C90Ysg0YjQsNGF0LTQsNGBINCw0YjQuNCz0LvQsNGFLicsXG4gICAgICBzaGVsdGVyQ29sZFByb3RlY3Rpb246ICfTqNCy06nQu9C206nTqdC90LjQuSDRhtGN0LLRjdGA0LvRjdCz0Y3RjdCzINGB0LDQudC20YDRg9GD0LvQtiDRgdCw0LvRhdC40L3QsNCw0YEg0YHRjdGA0LPQuNC50LvRjdGFLicsXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogW1xuICAgICAgICB7IG5hbWU6ICfQodGN0LvRjdC90LPRjSDQntCR0JMnLCBwaG9uZTogJzcwMzYtMTA1JyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICd0b3YnLFxuICAgIHNoYXBlTmFtZTogJ1TDtnYnLFxuICAgIGlzbzogJ01OLTA0NycsXG4gICAgbmFtZU1uOiAn0KLTqdCyJyxcbiAgICBuYW1lRW46ICdUb3YnLFxuICAgIGNlbnRlck1uOiAn0JfRg9GD0L3QvNC+0LQg0YXQvtGCJyxcbiAgICBjZW50ZXJDb29yZGluYXRlczogWzQ3LjcwODMsIDEwNi45NTgzXSxcbiAgICByZWdpb246ICfQotOp0LLQuNC50L0g0LHSr9GBJyxcbiAgICBhcmVhS20yOiA3NDA0MixcbiAgICBwb3B1bGF0aW9uOiA5MzQwMCxcbiAgICBsaXZlc3RvY2s6IHtcbiAgICAgIHRvdGFsOiA1MjEwMDAwLFxuICAgICAgaG9yc2VzOiA1MTIwMDAsXG4gICAgICBjYXR0bGU6IDU0MDAwMCxcbiAgICAgIGNhbWVsczogNDgwMCxcbiAgICAgIHNoZWVwOiAyNjUwMDAwLFxuICAgICAgZ29hdHM6IDE1MDMyMDAsXG4gICAgICB5ZWFyQ2hhbmdlUGVyY2VudDogLTQuMSxcbiAgICAgIGRlbnNpdHlQZXJTcUttOiA3MC40LFxuICAgIH0sXG4gICAgcGFzdHVyZToge1xuICAgICAgb3ZlcmxvYWRSYXRpbzogMi42LFxuICAgICAgc3RhdHVzOiAnaGlnaF9vdmVybG9hZCcsXG4gICAgICBzdGF0dXNMYWJlbDogJ9CU0LDQsNGGIDItMyDQtNCw0YXQuNC9INGF0Y3RgtGN0YDRgdGN0L0nLFxuICAgICAgeWllbGRDd3RIYTogMi44LFxuICAgICAgZm9kZGVyUHJlcGFyZWRQZXJjZW50OiA4NCxcbiAgICAgIGhheVByZXBhcmVkVG9uczogMTU1MDAwLFxuICAgICAgZ3JhemluZ1ByZXNzdXJlOiAn0JDRh9Cw0LDQu9Cw0Lsg0LjRhdGC0Y3QuScsXG4gICAgfSxcbiAgICBkenVkUmlzazoge1xuICAgICAgbGV2ZWw6ICdoaWdoJyxcbiAgICAgIGxldmVsTGFiZWw6ICfQmNGFINGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogNzksXG4gICAgICBwcmltYXJ5VHlwZTogJ9Cm0LDQs9Cw0LDQvSDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDI2LFxuICAgICAgc25vd0NvdmVyUGVyY2VudDogODQsXG4gICAgICBhZmZlY3RlZFNvdW1zQ291bnQ6IDE4LFxuICAgICAgdG90YWxTb3VtczogMjcsXG4gICAgICBzdW1tYXJ5OiAn0K3RgNC00Y3QvdGN0YHQsNC90YIsINOo0L3QtNOp0YDRiNC40YDRjdGN0YIsINCR0q/RgNGN0L0sINCR0LDRj9C9LdOo0L3QttKv0q/QuyDRgdGD0LzQtNCw0LQg0YbQsNGBINC40YUg0L7RgNC2INGF0YPQvdCz0LDRgNC70LDRgdCw0L0uINCd0LjQudGB0LvRjdC70LQg0L7QudGAINCx0L7Qu9C+0LLRhyDRg9GA0LQg0LHQvtC70L7QvSDQsdCw0YDRg9GD0L0g0YHRg9C80LTQsNC0INC80LDQuyDTqdCy06nQu9C20LjQu9GCINGF0q/QvdC00Y3RgNGHINCx0LDQudC90LAuJyxcbiAgICAgIGNyaXRpY2FsV2FybmluZzogJ9Cj0YDQtCDRgtCw0LvRi9C9INGB0YPQvNC00LDQtCDRhtCw0YHQsNC9INGI0YPRg9GA0LPQsCDQtNCw0YXQuNC9INC00LDQstGC0LDQs9C00LDRhSDRjdGA0YHQtNGN0Lsg06nQvdC006nRgCDQsdCw0LnQvdCwLicsXG4gICAgfSxcbiAgICBoZXJkZXJBZHZpc29yaWVzOiB7XG4gICAgICB1cmdlbnRBY3Rpb25zOiBbXG4gICAgICAgICfQptCw0YHQvdGLINC30YPQt9Cw0LDQvSAzMCDRgdC8LdGN0Y3RgSDQtNCw0LLRgdCw0L0g0YHRg9C80LTRi9C9INC80LDQu9GH0LTQsNC0INGC0YPRg9Cy0LDRgCwg0L7RgtC+0YAg0YXQuNC50YXQs9Kv0Lkg0LHQsNC50YXRi9CzINGB0LDQvdGD0YPQu9Cw0YUnLFxuICAgICAgICAn0KPQu9Cw0LDQvdCx0LDQsNGC0LDRgCDRhdC+0YLQvtC+0YEg0YLRjdC20Y3RjdC7INGC0LDRgtCw0L0g0LDQstCw0YUg0LvQvtCz0LjRgdGC0LjQutC40LnQvSDQsNC20LvRi9CzINC30L7RhdC40L7QvSDQsdCw0LnQs9GD0YPQu9Cw0YUnLFxuICAgICAgICAn0JHQvtCzINC80LDQu9GL0L0g0YXRjdCy0YLRjdGIINCx0YPRg9GG0YvQsyDRhdOp0LvQtNOp0YXTqdOp0YEg0YHRjdGA0LPQuNC50LvQtiDTqdC006nRgCDQsdKv0YAg0YHRjdCy0YDRjdGN0YUnLFxuICAgICAgXSxcbiAgICAgIGdyYXppbmdBZHZpY2U6ICfQrdC90LPRjdGAINGN0Y3QstGN0YAg0LPQsNC30YDQsNCw0YAg0L3QsNGA0L3RiyDQuNC70YfRgtGN0Lkg0YbQsNCz0YIgMy00INGG0LDQsyDQsdGN0LvRh9GN0Y3RgNC70q/Sr9C70Y3RhS4nLFxuICAgICAgZmVlZE51dHJpdGlvbkFkdmljZTogJ9Cd0L7Qs9C+0L7QvSDRgtGN0LbRjdGN0LvQuNC50L0g0LHQvtC+0LTQu9GL0LMg0YfQsNC90LDRgdCw0L0g0LHQsNCz0YHQsNGA0LzQsNC7INGF0LjQstGN0LPRgtGN0Lkg0YXQvtC70YzQtiDTqdCz06nRhS4nLFxuICAgICAgc2hlbHRlckNvbGRQcm90ZWN0aW9uOiAn0KXQsNGI0LDQsNC90YvRhdCw0LAg0YHQsNC70YXQuNC9INGC0LDQu9GL0LMg0YLTqdC806nRgCDRjdGB0LLRjdC7INC80L7QtCDRhdGN0YDRjdCz0LvRjdC9INC906nQvNOp0YDQu9Op0YUuJyxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBbXG4gICAgICAgIHsgbmFtZTogJ9Ci06nQsiDQsNC50LzQsNCzINCe0JHQkycsIHBob25lOiAnNzAyNy0xMDUnIH0sXG4gICAgICAgIHsgbmFtZTogJ9Co0YPRg9GA0YXQsNC5INCw0LvQsdCwJywgcGhvbmU6ICc3MDI3LTIyMjInIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBpZDogJ3V2cycsXG4gICAgc2hhcGVOYW1lOiAnVXZzJyxcbiAgICBpc286ICdNTi0wNDYnLFxuICAgIG5hbWVNbjogJ9Cj0LLRgScsXG4gICAgbmFtZUVuOiAnVXZzJyxcbiAgICBjZW50ZXJNbjogJ9Cj0LvQsNCw0L3Qs9C+0Lwg0YXQvtGCJyxcbiAgICBjZW50ZXJDb29yZGluYXRlczogWzQ5Ljk4MzMsIDkyLjA2NjddLFxuICAgIHJlZ2lvbjogJ9CR0LDRgNGD0YPQvSDQsdKv0YEnLFxuICAgIGFyZWFLbTI6IDY5NTg1LFxuICAgIHBvcHVsYXRpb246IDg1MjAwLFxuICAgIGxpdmVzdG9jazoge1xuICAgICAgdG90YWw6IDM1ODAwMDAsXG4gICAgICBob3JzZXM6IDE5ODAwMCxcbiAgICAgIGNhdHRsZTogMjQ1MDAwLFxuICAgICAgY2FtZWxzOiAyMTUwMCxcbiAgICAgIHNoZWVwOiAxODIwMDAwLFxuICAgICAgZ29hdHM6IDEyOTU1MDAsXG4gICAgICB5ZWFyQ2hhbmdlUGVyY2VudDogLTYuNCxcbiAgICAgIGRlbnNpdHlQZXJTcUttOiA1MS40LFxuICAgIH0sXG4gICAgcGFzdHVyZToge1xuICAgICAgb3ZlcmxvYWRSYXRpbzogMi45LFxuICAgICAgc3RhdHVzOiAnaGlnaF9vdmVybG9hZCcsXG4gICAgICBzdGF0dXNMYWJlbDogJ9CU0LDQsNGGIDItMyDQtNCw0YXQuNC9INGF0Y3RgtGN0YDRgdGN0L0nLFxuICAgICAgeWllbGRDd3RIYTogMS45LFxuICAgICAgZm9kZGVyUHJlcGFyZWRQZXJjZW50OiA3NyxcbiAgICAgIGhheVByZXBhcmVkVG9uczogODIwMDAsXG4gICAgICBncmF6aW5nUHJlc3N1cmU6ICfQkNGH0LDQsNC70LDQuyDQuNGF0YLRjdC5JyxcbiAgICB9LFxuICAgIGR6dWRSaXNrOiB7XG4gICAgICBsZXZlbDogJ2NyaXRpY2FsJyxcbiAgICAgIGxldmVsTGFiZWw6ICfQndGN0L0g0LjRhSDRjdGA0YHQtNGN0LvRgtGN0LknLFxuICAgICAgc2NvcmU6IDk0LFxuICAgICAgcHJpbWFyeVR5cGU6ICfQpdKv0LnRgtC90LjQuSDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDM2LFxuICAgICAgc25vd0NvdmVyUGVyY2VudDogOTEsXG4gICAgICBhZmZlY3RlZFNvdW1zQ291bnQ6IDE2LFxuICAgICAgdG90YWxTb3VtczogMTksXG4gICAgICBzdW1tYXJ5OiAn0KPQstGBINC90YPRg9GA0YvQvSDRhdC+0YLQs9C+0YDQvtC+0YAg0YjTqdC906nQtNOp06kgLTQ0wrBDLdCw0LDRgSAtNDnCsEMg0YXSr9GA0Ycg0YXRjdGCINGF0q/QudGC0YDRjdC70YIgMyDQtNC+0LvQvtC+INGF0L7QvdC+0LMg0q/RgNCz0Y3Qu9C20LjQu9C2INCx0LDQudC90LAuINCc0LDQu9GH0LjQtCDQsdGN0LvRh9GN0Y3RgNGCINCz0LDRgNCw0YXQsNC0INC80LDQuyDQsNC80YzRgdCz0LDQuyDQvdGMINCx0L7QvtCz0LTQvtGFINGN0YDRgdC00Y3Qu9GC0Y3QuS4nLFxuICAgICAgY3JpdGljYWxXYXJuaW5nOiAn0JfSr9Kv0L3Qs9C+0LLRjCwg0JHQsNGA0YPRg9C90YLRg9GA0YPRg9C9LCDQnNCw0LvRh9C40L0sINCl0Y/RgNCz0LDRgSDRgdGD0LzQtNCw0LQg0YXSr9C50YLQvdC40Lkg0LfRg9C0INGC0YPQudC70LTQsNCwINGF0q/RgNGB0Y3QvS4nLFxuICAgIH0sXG4gICAgaGVyZGVyQWR2aXNvcmllczoge1xuICAgICAgdXJnZW50QWN0aW9uczogW1xuICAgICAgICAn0KXRjdGCINGF0q/QudGC0Y3QvdC0INC80LDQu9GL0LMg0LfQsNC00LPQsNC5INCx0Y3Qu9GH0Y3RjdGA0YIg0L7Qs9GCINCz0LDRgNCz0LDRhdCz0q/QuSwg0YXQvtGA0L7QvtC90LQg0L3RjCDQvdOp0LzRgNOp0LPRgtGN0Lkg0YLRjdC20Y3RjdGFJyxcbiAgICAgICAgJ9CR0q/Qu9GN0Y3QvSDRg9GBLCDRhdCw0LvRg9GD0L0g0LfRg9GD0YDQvNCw0LPQsNCw0YAg0YPQvdC00LDQsNC70LYg0LHQuNC10LjQudC9INC00YPQu9Cw0LDQvdGL0LMg0YXQsNC00LPQsNC70LDRhScsXG4gICAgICAgICfQnNCw0LvRh9C40L0g06nRgNGF0q/Sr9C0INCz0LDQvdGG0LDQsNGA0YfQuNC70LYg0YXQvtC7INGP0LLQsNGF0LPSr9C5LCDRhdC+0LvQsdC+0L7RgtC+0Lkg0LHQsNC50YUnLFxuICAgICAgXSxcbiAgICAgIGdyYXppbmdBZHZpY2U6ICfQltCw0LLQsNGA0YLQsNC5INOp0LTTqdGAINC306nQstGF06nQvSDSr9C0INC00YPQvdC0INGB0LDQu9GF0LjQs9Kv0Lkg0L3TqdC806nRgNGCIDEtMiDRhtCw0LMg0LDQs9Cw0LDRgNC70YPRg9C70LDRhS4nLFxuICAgICAgZmVlZE51dHJpdGlvbkFkdmljZTogJ9Co0LDRgCDRgtC+0YEsINOp06nRhSDRgtC+0YHQvdGLINGF0L7Qu9GM0YbRgtC+0Lkg0YXSr9GH0LjRgiDRgtGN0LbRjdGN0Lsg0LHQsNCz0LAg0YLRg9C90LPQsNCw0YAg0LHQvtC00L7QtCDTqdCz06nRhS4nLFxuICAgICAgc2hlbHRlckNvbGRQcm90ZWN0aW9uOiAn0KXQsNGI0LDQsCDRgdCw0YDQsNCy0YfQuNC90LQg0Y3RgdCz0LjQuSDRhdOp0YjQuNCzINC00LDQstGF0LDRgNC70LDQvSDRg9Cz0LvQsNC2LCDRhtC+0L3RhSDQt9Cw0LLRgdGA0YvQsyDQsdOp0LPQu9Op0YUuJyxcbiAgICAgIGVtZXJnZW5jeUNvbnRhY3RzOiBbXG4gICAgICAgIHsgbmFtZTogJ9Cj0LLRgSDQntCR0JMnLCBwaG9uZTogJzcwNDUtMTA1JyB9LFxuICAgICAgICB7IG5hbWU6ICfQkNC50LzQs9C40LnQvSDQqNGD0YPRgNGF0LDQuScsIHBob25lOiAnNzA0NS0yMTIxJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdraG92ZCcsXG4gICAgc2hhcGVOYW1lOiAnS2hvdmQnLFxuICAgIGlzbzogJ01OLTA0MycsXG4gICAgbmFtZU1uOiAn0KXQvtCy0LQnLFxuICAgIG5hbWVFbjogJ0tob3ZkJyxcbiAgICBjZW50ZXJNbjogJ9Cl0L7QstC0INGF0L7RgicsXG4gICAgY2VudGVyQ29vcmRpbmF0ZXM6IFs0OC4wMDU2LCA5MS42NDE3XSxcbiAgICByZWdpb246ICfQkdCw0YDRg9GD0L0g0LHSr9GBJyxcbiAgICBhcmVhS20yOiA3NjA2MCxcbiAgICBwb3B1bGF0aW9uOiA5MDIwMCxcbiAgICBsaXZlc3RvY2s6IHtcbiAgICAgIHRvdGFsOiAzNTEwMDAwLFxuICAgICAgaG9yc2VzOiAxNjUwMDAsXG4gICAgICBjYXR0bGU6IDIxMDAwMCxcbiAgICAgIGNhbWVsczogMjgwMDAsXG4gICAgICBzaGVlcDogMTU0MDAwMCxcbiAgICAgIGdvYXRzOiAxNTY3MDAwLFxuICAgICAgeWVhckNoYW5nZVBlcmNlbnQ6IC0zLjIsXG4gICAgICBkZW5zaXR5UGVyU3FLbTogNDYuMSxcbiAgICB9LFxuICAgIHBhc3R1cmU6IHtcbiAgICAgIG92ZXJsb2FkUmF0aW86IDIuMixcbiAgICAgIHN0YXR1czogJ2hpZ2hfb3ZlcmxvYWQnLFxuICAgICAgc3RhdHVzTGFiZWw6ICfQlNCw0LDRhiAyLTMg0LTQsNGF0LjQvSDRhdGN0YLRjdGA0YHRjdC9JyxcbiAgICAgIHlpZWxkQ3d0SGE6IDIuMyxcbiAgICAgIGZvZGRlclByZXBhcmVkUGVyY2VudDogODMsXG4gICAgICBoYXlQcmVwYXJlZFRvbnM6IDc2MDAwLFxuICAgICAgZ3JhemluZ1ByZXNzdXJlOiAn0JDRh9Cw0LDQu9Cw0Lsg0LjRhdGC0Y3QuScsXG4gICAgfSxcbiAgICBkenVkUmlzazoge1xuICAgICAgbGV2ZWw6ICdoaWdoJyxcbiAgICAgIGxldmVsTGFiZWw6ICfQmNGFINGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogNzQsXG4gICAgICBwcmltYXJ5VHlwZTogJ9Cl0LDQstGB0LDRgNGB0LDQvSDQt9GD0LQnLFxuICAgICAgc25vd0RlcHRoQ206IDIxLFxuICAgICAgc25vd0NvdmVyUGVyY2VudDogNzcsXG4gICAgICBhZmZlY3RlZFNvdW1zQ291bnQ6IDExLFxuICAgICAgdG90YWxTb3VtczogMTcsXG4gICAgICBzdW1tYXJ5OiAn0JDQu9GC0LDQudC9INC90YPRgNGD0YPQvdGLINCw0YAg06nQstOp0YDTqdOp0YAg0YHQsNC70YXQuCDRhdKv0YfRgtGN0LksINC30LDRgNC40Lwg0YXRjdGB0LPRjdGN0YAg0YbQsNGBINC90Y/Qs9GC0LDRgNGB0LDQvS4g0KfQsNC90LTQvNCw0L3RjCwg0JTQsNGA0LLQuCwg0JfRjdGA0Y3QsyDRgdGD0LzQtNCw0LQg0LHRjdC70YfRjdGN0YAg0LTQsNCw0YYg0YXRjdGC0Y3RgNGB0Y3QvS4nLFxuICAgICAgY3JpdGljYWxXYXJuaW5nOiAn0KXSr9C50YLRjdC9INGB0LDQu9GF0Lgg0JDQu9GC0LDQudC9INC00LDQstCw0LDQs9Cw0LDRgCAyMC0yNSDQvC/RgSDRhdKv0YDRhyDRiNGD0YPRgNGHINCx0L7Qu9C30L7RiNCz0q/QuS4nLFxuICAgIH0sXG4gICAgaGVyZGVyQWR2aXNvcmllczoge1xuICAgICAgdXJnZW50QWN0aW9uczogW1xuICAgICAgICAn0KPRg9C70YvQvSDQtNCw0LLQsNCwINGG0LDRgdCw0L3QtCDRhdCw0LDQs9C00LDRhdCw0LDRgSDRg9GA0YzQtNGH0LjQu9Cw0L0g0YHRg9GD0YDRjNGI0LvRi9C9INCx0q/RgdGC0Y3QuSDRhdC+0LvQsdC+0L4g0YLQvtCz0YLQvtC+0YUnLFxuICAgICAgICAn0JzQsNC7INCw0LzRjNGC0L3RiyDRhdC+0YDQvtC+0LMg0YLQvtCz0YLQvNC+0Lsg0YbRjdCy0Y3RgNC70Y3QtiDQvNOp0YEg0LDRgNC40LvQs9Cw0YUnLFxuICAgICAgXSxcbiAgICAgIGdyYXppbmdBZHZpY2U6ICfQkNC70YLQsNC50L0g0YPRg9C70YHRi9C9INC906nQvNOp0YAg06nQstOp0YAg0Y3QvdCz0Y3RgNC40LnQsyDRgtKv0YjQuNC9INCx0Y3Qu9GH0Y3RjdGA0LvSr9Kv0LvRjdGFLicsXG4gICAgICBmZWVkTnV0cml0aW9uQWR2aWNlOiAn0KLRjdC20Y3RjdC70LjQudC9INCx0LDQs9GB0LDRgNC80LDQuywg0LTQsNCy0YEsINGF0YPQttC40YDRi9C9INC906nTqdGG0LjQudCzINGF0YPQstCw0LDRgNC40LnQvSDQtNCw0LPRg9GDINOp0LPTqdGFLicsXG4gICAgICBzaGVsdGVyQ29sZFByb3RlY3Rpb246ICfQpdCw0YjQsNCw0L3RiyDRgdCw0LvRhdC40L0g0YLQsNC70LQg0YfRg9C70YPRg9C9INCx0L7RgdCz0L4sINGI0LDQstCw0YAg0YXQsNC90LAg0LHQvtGB0LPQvtGFLicsXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogW1xuICAgICAgICB7IG5hbWU6ICfQpdC+0LLQtCDQntCR0JMnLCBwaG9uZTogJzcwNDMtMTA1JyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdob3ZzZ2VsJyxcbiAgICBzaGFwZU5hbWU6ICdIb3ZzZ2VsJyxcbiAgICBpc286ICdNTi0wNDEnLFxuICAgIG5hbWVNbjogJ9Cl06nQstGB0LPTqdC7JyxcbiAgICBuYW1lRW46ICdLaG92c2dvbCcsXG4gICAgY2VudGVyTW46ICfQnNOp0YDTqdC9INGF0L7RgicsXG4gICAgY2VudGVyQ29vcmRpbmF0ZXM6IFs0OS42MzQyLCAxMDAuMTU4M10sXG4gICAgcmVnaW9uOiAn0KXQsNC90LPQsNC50L0g0LHSr9GBJyxcbiAgICBhcmVhS20yOiAxMDA2MjksXG4gICAgcG9wdWxhdGlvbjogMTM2MjAwLFxuICAgIGxpdmVzdG9jazoge1xuICAgICAgdG90YWw6IDYyNDAwMDAsXG4gICAgICBob3JzZXM6IDQzNTAwMCxcbiAgICAgIGNhdHRsZTogODg1MDAwLFxuICAgICAgY2FtZWxzOiAyODAwLFxuICAgICAgc2hlZXA6IDMxMjAwMDAsXG4gICAgICBnb2F0czogMTc5NzIwMCxcbiAgICAgIHllYXJDaGFuZ2VQZXJjZW50OiAtNC4zLFxuICAgICAgZGVuc2l0eVBlclNxS206IDYyLjAsXG4gICAgfSxcbiAgICBwYXN0dXJlOiB7XG4gICAgICBvdmVybG9hZFJhdGlvOiAyLjcsXG4gICAgICBzdGF0dXM6ICdoaWdoX292ZXJsb2FkJyxcbiAgICAgIHN0YXR1c0xhYmVsOiAn0JTQsNCw0YYgMi0zINC00LDRhdC40L0g0YXRjdGC0Y3RgNGB0Y3QvScsXG4gICAgICB5aWVsZEN3dEhhOiAzLjUsXG4gICAgICBmb2RkZXJQcmVwYXJlZFBlcmNlbnQ6IDg3LFxuICAgICAgaGF5UHJlcGFyZWRUb25zOiAxODIwMDAsXG4gICAgICBncmF6aW5nUHJlc3N1cmU6ICfQkNGH0LDQsNC70LDQuyDQuNGF0YLRjdC5JyxcbiAgICB9LFxuICAgIGR6dWRSaXNrOiB7XG4gICAgICBsZXZlbDogJ2NyaXRpY2FsJyxcbiAgICAgIGxldmVsTGFiZWw6ICfQndGN0L0g0LjRhSDRjdGA0YHQtNGN0LvRgtGN0LknLFxuICAgICAgc2NvcmU6IDg3LFxuICAgICAgcHJpbWFyeVR5cGU6ICfQptCw0LPQsNCw0L0g0LfRg9C0JyxcbiAgICAgIHNub3dEZXB0aENtOiAzNSxcbiAgICAgIHNub3dDb3ZlclBlcmNlbnQ6IDkzLFxuICAgICAgYWZmZWN0ZWRTb3Vtc0NvdW50OiAxOCxcbiAgICAgIHRvdGFsU291bXM6IDIzLFxuICAgICAgc3VtbWFyeTogJ9Cm0LDQs9Cw0LDQvdC90YPRg9GALCDQo9C70LDQsNC9LdCj0YPQuywg0KDQtdC90YfQuNC90LvRhdKv0LzQsdGNLCDQkdCw0Y/QvdC30q/RgNGFINGB0YPQvNC00LDQtCDQlNCw0YDRhdCw0LTRi9C9INGF0L7RgtCz0L7RgNGL0L0g0YXSr9C50YLRjdC9IC00NcKwQyDQtNCw0LLQtiwg0YbQsNGB0L3RiyDQt9GD0LfQsNCw0L0gNDAtNjAg0YHQvCDRhdKv0YDRgdGN0L0uINCi0LDQudCz0YvQvSDQt9Cw0Lwg0YLRjdGN0LLRjdGAINGB0LDQsNGC0YHQsNC9LicsXG4gICAgICBjcml0aWNhbFdhcm5pbmc6ICfQlNCw0YDRhdCw0LTRi9C9INGF0L7RgtCz0L7RgNGCINGG0LDRgdC90Ysg0LfRg9C30LDQsNC9INGA0LXQutC+0YDQtCDRhdGN0LzQttGN0Y3QvdC0INGF0q/RgNGB0Y3QvSDRgtGD0Lsg0LzQsNC7INCx0Y3Qu9GH0Y3RjdGA0LvRjdGFINCx0L7Qu9C+0LzQtiDQsdKv0YDRjdC9INGF0LDQsNCz0LTRgdCw0L0uJyxcbiAgICB9LFxuICAgIGhlcmRlckFkdmlzb3JpZXM6IHtcbiAgICAgIHVyZ2VudEFjdGlvbnM6IFtcbiAgICAgICAgJ9Cm0LDRgdCw0L3QtCDRgdGD0YPRgdCw0L0g0LzQsNC70YfQuNC9INOp0YDRhdKv0q/QtNGN0LQg0YbQsNGB0LDQvSDQt9Cw0Lwg0LPQsNGA0LPQsNCz0Ycg0YLQtdGF0L3QuNC6INC40LvQs9GN0Y3RhSDRhdKv0YHRjdC70YIg06nQs9Op0YUnLFxuICAgICAgICAn0KLQsNC50LPRi9C9INCx0L7Qu9C+0L0g0YPRg9C70YvQvSDQsdKv0YHQuNC50L0g0LzQsNC70YvQsyDQtNGD0LvQsNCw0L0g0L/Sr9C90LcsINCx0LDQsNC30LDQvdC0INC+0YDRg9GD0LvQtiDQsdCw0LnQvdCz0YvQvSDRgtGN0LbRjdGN0LvQtCDRiNC40LvQttKv0q/Qu9GN0YUnLFxuICAgICAgICAn0KbQsNCwINCx0YPQs9GL0L0g0LHRjdC70YfRjdGN0YDQuNC50L0g0YbQsNGB0L3RiyDQvdGP0LPRgtCw0YDRiNC70YvQsyDRiNCw0LvQs9Cw0YUnLFxuICAgICAgXSxcbiAgICAgIGdyYXppbmdBZHZpY2U6ICfQptCw0YEgNDAg0YHQvC3RjdGN0YEg0LTRjdGN0Ygg0LfRg9C30LDQsNC90YLQsNC5INGC0YPQuyDQsdGN0LvRh9GN0Y3RgNGCINCz0LDRgNCz0LDRhdCz0q/QuSwg0YXQsNGI0LDQsNC90LTQsNCwINGC0Y3QttGN0Y3RhS4nLFxuICAgICAgZmVlZE51dHJpdGlvbkFkdmljZTogJ9Ch0LDQudC9INGH0LDQvdCw0YDRi9C9INGF0LDQtNC70LDQvSwg0YHSr9GA0Y3Quywg0YfQsNC90LDRgdCw0L0g0YXQuNCy0Y3Qs9C90LjQuSDQt9GD0YLQsNC9INOp0LTTqdGA0YIgMi0zINGD0LTQsNCwINOp0LPTqdGFLicsXG4gICAgICBzaGVsdGVyQ29sZFByb3RlY3Rpb246ICfQnNC+0LTQvtC9INGF0L7RgNC+0L7QsyDRhdGD0YPRgNCw0Lkg06nQstGB06nTqdGAINGH0LjQs9C20LjQtiDQtNGD0LvQsNCw0LvQs9GL0L0g0LHSr9GA0Y3RjdGBINC00LDQstGF0LDRgCDRgtCw0YLQsNGFLicsXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogW1xuICAgICAgICB7IG5hbWU6ICfQpdOp0LLRgdCz06nQuyDQntCR0JMnLCBwaG9uZTogJzcwMzgtMTA1JyB9LFxuICAgICAgICB7IG5hbWU6ICfQqNGD0YPRgNGF0LDQuSDQsNC70LHQsCcsIHBob25lOiAnNzAzOC0yMjIyJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICdraGVudGlpJyxcbiAgICBzaGFwZU5hbWU6ICdLaGVudGlpJyxcbiAgICBpc286ICdNTi0wMzknLFxuICAgIG5hbWVNbjogJ9Cl0Y3QvdGC0LjQuScsXG4gICAgbmFtZUVuOiAnS2hlbnRpaScsXG4gICAgY2VudGVyTW46ICfQp9C40L3Qs9C40YEg0YXQvtGCJyxcbiAgICBjZW50ZXJDb29yZGluYXRlczogWzQ3LjMxNjcsIDExMC42NTU2XSxcbiAgICByZWdpb246ICfQl9Kv0q/QvSDQsdKv0YEnLFxuICAgIGFyZWFLbTI6IDgwMzI1LFxuICAgIHBvcHVsYXRpb246IDc5NTAwLFxuICAgIGxpdmVzdG9jazoge1xuICAgICAgdG90YWw6IDQ4OTAwMDAsXG4gICAgICBob3JzZXM6IDQ4MjAwMCxcbiAgICAgIGNhdHRsZTogNTIwMDAwLFxuICAgICAgY2FtZWxzOiA1MTAwLFxuICAgICAgc2hlZXA6IDI1MTAwMDAsXG4gICAgICBnb2F0czogMTM3MjkwMCxcbiAgICAgIHllYXJDaGFuZ2VQZXJjZW50OiAtNy4yLFxuICAgICAgZGVuc2l0eVBlclNxS206IDYwLjksXG4gICAgfSxcbiAgICBwYXN0dXJlOiB7XG4gICAgICBvdmVybG9hZFJhdGlvOiAzLjIsXG4gICAgICBzdGF0dXM6ICdjcml0aWNhbF9vdmVybG9hZCcsXG4gICAgICBzdGF0dXNMYWJlbDogJ9CU0LDQsNGGIDMt0LDQsNGBINC00Y3RjdGIINC00LDRhdC40L0g0YXRjdGC0Y3RgNGB0Y3QvScsXG4gICAgICB5aWVsZEN3dEhhOiAyLjcsXG4gICAgICBmb2RkZXJQcmVwYXJlZFBlcmNlbnQ6IDcxLFxuICAgICAgaGF5UHJlcGFyZWRUb25zOiAxMTAwMDAsXG4gICAgICBncmF6aW5nUHJlc3N1cmU6ICfQndGN0L0g0LDRh9Cw0LDQu9Cw0LvRgtCw0LknLFxuICAgIH0sXG4gICAgZHp1ZFJpc2s6IHtcbiAgICAgIGxldmVsOiAnY3JpdGljYWwnLFxuICAgICAgbGV2ZWxMYWJlbDogJ9Cd0Y3QvSDQuNGFINGN0YDRgdC00Y3Qu9GC0Y3QuScsXG4gICAgICBzY29yZTogOTMsXG4gICAgICBwcmltYXJ5VHlwZTogJ9Ci06nQvNOp0YAg0LfRg9C0JyxcbiAgICAgIHNub3dEZXB0aENtOiAzMSxcbiAgICAgIHNub3dDb3ZlclBlcmNlbnQ6IDkwLFxuICAgICAgYWZmZWN0ZWRTb3Vtc0NvdW50OiAxNSxcbiAgICAgIHRvdGFsU291bXM6IDE4LFxuICAgICAgc3VtbWFyeTogJ9CR0LDRgtC90L7RgNC+0LIsINCR0LjQvdC00Y3RgCwg0J3QvtGA0L7QstC70LjQvSwg0JTQsNC00LDQuyDRgdGD0LzQtNCw0LQg0YbQsNGBINC+0YDQtiDRhdCw0LnQu9GB0L3RiyDQtNCw0YDQsNCwINC806nRgdOp0L0g0LHSr9GA0YXSr9Kv0Lsg0q/Sr9GB0Y3QtiDRgtOp0LzTqdGAINC30YPQtCDQvdKv0q/RgNC70Y3RgdGN0L0uINCc0LDQuyDQsdGN0LvRh9GN0Y3RgNGCINGP0LLQsNGF0LDQtCDRhdOp0Lsg0LPRjdC80YLRjdC2LCDTqdCy0YEg0LjQtNGN0YUg0LHQvtC70L7QvNC20LPSr9C5INCx0L7Qu9GB0L7QvS4nLFxuICAgICAgY3JpdGljYWxXYXJuaW5nOiAn0KXRjdC90YLQuNC50L0g0LfSr9Kv0L0g0YXQvtC50LQg0YHRg9C80LTQsNC0INGC06nQvNOp0YAg0LfRg9C00YvQvSDRg9C70LzQsNCw0YEg0LzQsNC7INGC0YPRgNCw0LDQu9C0INC+0YDQtiDRjdGF0Y3Qu9GB0Y3QvSDRgtGD0Lsg0L3RjdC9INGP0LDRgNCw0LvRgtCw0Lkg0YLRjdC20Y3RjdC70LjQudC9INC00Y3QvNC20LvRjdCzINGF0Y3RgNGN0LPRgtGN0LkuJyxcbiAgICB9LFxuICAgIGhlcmRlckFkdmlzb3JpZXM6IHtcbiAgICAgIHVyZ2VudEFjdGlvbnM6IFtcbiAgICAgICAgJ9Cc06nRgdOp0L0g0LHSr9GA0YXSr9Kv0LvQuNC50LMg0YfQuNGA0Y3Qs9GHINGB0LDQvNCx0LDRgCwg0LzQvtC00L7QvSDQsdGD0LvQs9Cw0LDRgCDQvdGP0YbQu9Cw0L0g0YXRg9GD0LvQsNGFJyxcbiAgICAgICAgJ9Cl06nQuyDQvdGMINGI0LDQu9Cx0LDRgNGB0LDQvSDQsdC+0LMg0LzQsNC70YvQsyDRgtGD0YHQsNC0INC90Ywg0Y/Qu9Cz0LDQtiDQtNGD0LvQsNCw0L0g0YXQsNGI0LDQsNC90LQg0YLRjdC20Y3RjdGFJyxcbiAgICAgICAgJ9Cj0LvRgdGL0L0g0LHQvtC70L7QvSDQsNC50LzQs9C40LnQvSDTqdCy0YEg0YLRjdC20Y3RjdC70LjQudC9INGG0Y3Qs9GN0Y3RgSDRhdGD0LLQsNCw0YDQuNC70LDQu9GCINCw0LLQsNGFJyxcbiAgICAgIF0sXG4gICAgICBncmF6aW5nQWR2aWNlOiAn0JzTqdGB0YLRjdC5INCx0Y3Qu9GH0Y3RjdGA0YIg0LHRjdC70YfRjdGN0YDQu9Kv0q/Qu9GN0YXQs9Kv0LksINGG0LDRgdCz0q/QuSDRjdGB0LLRjdC7INC90Y/RhtCw0YDRgdCw0L0g0YLQsNC70LHQsNC50LQg0YbTqdOp0L0g0YbQsNCz0LDQsNGAINCz0LDRgNCz0LDRhS4nLFxuICAgICAgZmVlZE51dHJpdGlvbkFkdmljZTogJ9Co0LjQvCDRgtGN0LbRjdGN0LvRgiDQsdCw0LPRgdCw0YDQvNCw0LssINGI0LDRgCDRgtC+0YEsINGN0YDQtNGN0YEg0YXRg9C20LjRgNGL0LMg0YLQvtCz0YLQvNC+0Lsg06nQs9Op0YUuJyxcbiAgICAgIHNoZWx0ZXJDb2xkUHJvdGVjdGlvbjogJ9Cl0LDRiNCw0LAg0YXQvtGA0L7QvtC90Ysg0LzTqdGB0LjQudCzINCw0YDQuNC70LPQsNC2LCDRhdGD0YPRgNCw0Lkg0LTRjdCy0YHQs9GN0YAg0LTRjdCy0YHRjdGFLicsXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogW1xuICAgICAgICB7IG5hbWU6ICfQpdGN0L3RgtC40Lkg0J7QkdCTJywgcGhvbmU6ICc3MDU2LTEwNScgfSxcbiAgICAgICAgeyBuYW1lOiAn0J7QvdGG0LPQvtC5INC60L7QvNC40YHRgScsIHBob25lOiAnNzA1Ni0yMzIzJyB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgaWQ6ICd1bGFhbmJhYXRhcicsXG4gICAgc2hhcGVOYW1lOiAnVWxhYW5iYWF0YXInLFxuICAgIGlzbzogJ01OLTEnLFxuICAgIG5hbWVNbjogJ9Cj0LvQsNCw0L3QsdCw0LDRgtCw0YAg0YXQvtGCJyxcbiAgICBuYW1lRW46ICdVbGFhbmJhYXRhcicsXG4gICAgY2VudGVyTW46ICfQodKv0YXQsdCw0LDRgtCw0YDRi9C9INGC0LDQu9Cx0LDQuScsXG4gICAgY2VudGVyQ29vcmRpbmF0ZXM6IFs0Ny45MTg4LCAxMDYuOTE3Nl0sXG4gICAgcmVnaW9uOiAn0J3QuNC50YHQu9GN0LsnLFxuICAgIGFyZWFLbTI6IDQ3MDQsXG4gICAgcG9wdWxhdGlvbjogMTY5MDAwMCxcbiAgICBsaXZlc3RvY2s6IHtcbiAgICAgIHRvdGFsOiAzOTUwMDAsXG4gICAgICBob3JzZXM6IDM4MDAwLFxuICAgICAgY2F0dGxlOiA2NTAwMCxcbiAgICAgIGNhbWVsczogMzAwLFxuICAgICAgc2hlZXA6IDE3MjAwMCxcbiAgICAgIGdvYXRzOiAxMTk3MDAsXG4gICAgICB5ZWFyQ2hhbmdlUGVyY2VudDogLTEuNSxcbiAgICAgIGRlbnNpdHlQZXJTcUttOiA4My45LFxuICAgIH0sXG4gICAgcGFzdHVyZToge1xuICAgICAgb3ZlcmxvYWRSYXRpbzogMi40LFxuICAgICAgc3RhdHVzOiAnaGlnaF9vdmVybG9hZCcsXG4gICAgICBzdGF0dXNMYWJlbDogJ9CU0LDQsNGGIDItMyDQtNCw0YXQuNC9INGF0Y3RgtGN0YDRgdGN0L0nLFxuICAgICAgeWllbGRDd3RIYTogMi4yLFxuICAgICAgZm9kZGVyUHJlcGFyZWRQZXJjZW50OiA5MixcbiAgICAgIGhheVByZXBhcmVkVG9uczogMjgwMDAsXG4gICAgICBncmF6aW5nUHJlc3N1cmU6ICfQkNGH0LDQsNC70LDQuyDQuNGF0YLRjdC5JyxcbiAgICB9LFxuICAgIGR6dWRSaXNrOiB7XG4gICAgICBsZXZlbDogJ2xvdycsXG4gICAgICBsZXZlbExhYmVsOiAn0JHQsNCz0LAg0Y3RgNGB0LTRjdC70YLRjdC5JyxcbiAgICAgIHNjb3JlOiAzMCxcbiAgICAgIHByaW1hcnlUeXBlOiAn0KbQsNCz0LDQsNC9INC30YPQtCcsXG4gICAgICBzbm93RGVwdGhDbTogMTUsXG4gICAgICBzbm93Q292ZXJQZXJjZW50OiA2NSxcbiAgICAgIGFmZmVjdGVkU291bXNDb3VudDogMixcbiAgICAgIHRvdGFsU291bXM6IDksXG4gICAgICBzdW1tYXJ5OiAn0JHQsNCz0LDQvdGD0YPRgCwg0JHQsNCz0LDRhdCw0L3Qs9Cw0LksINCd0LDQu9Cw0LnRhSDQtNKv0q/RgNCz0LjQudC9INC80LDQuyDQsdKv0YXQuNC5INOp0YDRhdKv0q/QtNC40LnQvSDTqdCy06nQu9C20LjQu9GCINGC0L7Qs9GC0LLQvtGA0YLQvtC5LiDQndC40LnRgdC70Y3Qu9C40LnQvSDRgtOp0LLQtCDQtNGN0LQg0LHSr9GC0Y3Rhiwg0YXQsNC90LPQsNC80LYg0L3QsNC50LTQstCw0YDRgtCw0LkuJyxcbiAgICAgIGNyaXRpY2FsV2FybmluZzogbnVsbCxcbiAgICB9LFxuICAgIGhlcmRlckFkdmlzb3JpZXM6IHtcbiAgICAgIHVyZ2VudEFjdGlvbnM6IFtcbiAgICAgICAgJ9CQ0LvRgdC70LDQs9C00YHQsNC9INC00q/Sr9GA0LPSr9Kv0LTQuNC50L0g0LfQsNC80YvQvSDRhdCw0LvRgtC40YDQs9Cw0LAg0LPRg9C70LPQsNCw0LMg0LDRgNC40LvQs9Cw0YUnLFxuICAgICAgICAn0JHQsNC50YDQsNC9INC80LDQu9C70LDQs9Cw0LDQvdGLINCz0L7RgNC40LzQtCDQsdKv0YDRjdC9INGI0LjQu9C20LjRhScsXG4gICAgICBdLFxuICAgICAgZ3JhemluZ0FkdmljZTogJ9Cl0L7RgiDQvtGA0YfQvNGL0L0g0YXQsNC80LPQsNCw0LvQsNC70YLRi9C9INCx0q/RgdGN0LQg0LHRjdC70YfRjdGN0YDQu9GN0YXQs9Kv0Lkg0LHQsNC50YUuJyxcbiAgICAgIGZlZWROdXRyaXRpb25BZHZpY2U6ICfQndC40LnRgdC70Y3Qu9C40LnQvSDRgtGN0LbRjdGN0LvQuNC50L0g0YXRg9C00LDQu9C00LDQsNC90Ysg0YbRjdCz0q/Sr9C00Y3RjdGBINCx0Y3Qu9GN0L0g0YXQvtC70LjQvNC+0LMg0YLRjdC20Y3RjdC7INCw0LLQsNGFLicsXG4gICAgICBzaGVsdGVyQ29sZFByb3RlY3Rpb246ICfTqNCy06nQu9C206nTqdC90LjQuSDQtNGD0LvQsNCw0LvQs9GL0LMg0YjQsNC70LPQsNGFLicsXG4gICAgICBlbWVyZ2VuY3lDb250YWN0czogW1xuICAgICAgICB7IG5hbWU6ICfQndCe0JHQkyDRiNGD0YPRgNGF0LDQuSDRg9GC0LDRgScsIHBob25lOiAnMTA1JyB9LFxuICAgICAgICB7IG5hbWU6ICfQndC40LnRgdC70Y3Qu9C40LnQvSDQpdCl0JDQkNCTJywgcGhvbmU6ICc3MDExLTIyOTAnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgTkFUSU9OQUxfVE9UQUxTID0ge1xuICB0b3RhbExpdmVzdG9jazogNjQ3MDAwMDAsXG4gIHRvdGFsSG9yc2VzOiA0ODM2MDAwLFxuICB0b3RhbENhdHRsZTogNTM4MDAwMCxcbiAgdG90YWxDYW1lbHM6IDQ3MzAwMCxcbiAgdG90YWxTaGVlcDogMjk0MjAwMDAsXG4gIHRvdGFsR29hdHM6IDI0NTkxMDAwLFxuICBjcml0aWNhbEFpbWFnc0NvdW50OiA4LFxuICBoaWdoUmlza0FpbWFnc0NvdW50OiA1LFxuICBtb2RlcmF0ZVJpc2tBaW1hZ3NDb3VudDogNSxcbiAgbG93Umlza0FpbWFnc0NvdW50OiA0LFxuICBhdmVyYWdlUGFzdHVyZU92ZXJsb2FkOiAyLjQ1LFxuICBhdmVyYWdlU25vd0NvdmVyUGVyY2VudDogNzQsXG59O1xuIl19`;export{e as default};