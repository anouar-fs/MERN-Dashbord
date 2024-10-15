import OverallStat from '../models/Overall.js'

export const getSalesStates = async(req,res)=>{
    try {
        const SalesStats = await OverallStat.find()
        const {monthlyData} = SalesStats[0]
        
        const monthlySales = monthlyData.map((elm)=>{
            return {"x": elm.month,
            "y": elm.totalSales}
        })
        const monthlySalesToSend = [{"id":"totalSales",
            "color": "hsl(186, 70%, 50%)",
            "data": monthlySales
            }]  

        
            const MonthlyUnits = monthlyData.map((elm)=>{
                return {"x": elm.month,
                "y": elm.totalUnits}
            })
            const MonthlyUnitsToSend = [{"id":"totalUnits",
                "color": "hsl(186, 70%, 50%)",
                "data": MonthlyUnits
                }]  

        res.status(200).json({
                        monthlySales:monthlySalesToSend,
                        MonthlyUnits:MonthlyUnitsToSend})
    } catch (error) {
        res.status(400).json({
            status: 404,
            message : error.message
        })
    }

}



export const getSalesDaily = async(req,res)=>{
    
    try {
        let filter = req.query
        // console.log(new Date(filter.startDate))
        const SalesStats = await OverallStat.find()
        let {dailyData} = SalesStats[0]
        
        
        const DailySales = dailyData.filter((elm)=>{
            return ((new Date(elm.date))>=new Date(filter.startDate) && (new Date(elm.date))<=new Date(filter.endDate))
        })

        
        
        const DailySales2 = DailySales.map((elm)=>{
            return {"x": elm.date,
                    "y": elm.totalSales}
        })



        const DailySalesToSend = [{"id":"totalSales",
            "color": "hsl(186, 70%, 50%)",
            "data": DailySales2
            }]  


            const DailyUnits2 = DailySales.map((elm)=>{
                return {"x": elm.date,
                    "y": elm.totalUnits}
            }) 

            const DailyUnitsToSend = [{"id":"totalUnits",
                "color": "hsl(186, 70%, 50%)",
                "data": DailyUnits2
                }]  

        res.status(200).json({
                        dailySales:DailySalesToSend,
                        dailyUnits:DailyUnitsToSend})
    } catch (error) {
        res.status(400).json({
            status: 404,
            message : error.message
        })
    }

}

export const getBRsales = async(req,res)=>{
    try {
        const  data = await OverallStat.find()
        // let {salesByCategory} = data;
        res.status(200).json(data[0].salesByCategory)
    } catch (error) {
        res.status(400).json({
            status: 404,
            message : error.message
        })
    }
}