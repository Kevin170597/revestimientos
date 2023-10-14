
export const getDollarBlue = async () => {
    const req = await fetch("https://api.bluelytics.com.ar/v2/latest")
    const res = await req.json()
    //console.log(res.blue.value_avg)
    return res.blue.value_avg
}