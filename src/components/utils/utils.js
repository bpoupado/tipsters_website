const ConvertDateTime = function(date, format){
    var new_formatted_date = new Date(date);
    var dateFormat = new Intl.DateTimeFormat('en-US', format);

    return dateFormat.format(new_formatted_date);
}

export default ConvertDateTime;