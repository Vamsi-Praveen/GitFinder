export const formatDate = (date) => {

    var Date = date.split('T')[0];  //2022-01-23
    var newDate = Date.split('-')
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const formatedDate = newDate[2] +" "+ months[newDate[1] - 1] +" "+ newDate[0]
    return formatedDate

}