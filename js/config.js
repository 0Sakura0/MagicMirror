var config = {
    lang: 'zh_cn',
    time: {
        timeFormat: 12,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        interval: 120000,
        fadeInterval: 10000,
        params: {
            q: 'dalian',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'zh_cn',
            APPID: 'e8fb67bb31a0b16da464d234238420f7'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!'
        ]
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		{
			symbol: 'calendar-plus-o',
			url: 'https://p32-calendars.icloud.com/published/2/19serRMXg_-dwh6EZfifp2NAqgqzItKbHaBztr1JxS-bV-6qLgothdaSRrF1_2d0lpF663BN5KsEq56c3Q53GgTgZiWnHLmAGVyXlvEvLVU'
		},
		// {
		// 	symbol: 'soccer-ball-o',
		// 	url: 'https://www.google.com/calendar/ical/akvbisn5iha43idv0ktdalnor4%40group.calendar.google.com/public/basic.ics',
		// },
		// {
			// symbol: 'mars',
			// url: "https://server/url/to/his.ics",
		// },
		// {
			// symbol: 'venus',
			// url: "https://server/url/to/hers.ics",
		// },
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },
    news: {
        feed: 'http://feeds2.feedburner.com/cnbeta_full'
    }
}
