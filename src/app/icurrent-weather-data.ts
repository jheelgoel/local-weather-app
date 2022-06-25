export interface ICurrentWeatherData {
    weather:[
        {
            description: string,
            icon: string
        }
    ],
    dt: number,
    sys:{
        country: string
    },
    main:{
        temp: number
    },
    name: string
    
}
