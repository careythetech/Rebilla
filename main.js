var radioButtons = $(".form-radio");
var dropdownContainer = $("#dropdown-container")

function handleChange(data) {
    var tdObj = jQuery(data)
    var parent = jQuery(tdObj.next())
    var label = parent.text()
    // console.log(label)
    if (label === "Auto-ship - Subscribe & Save! (USA Orders Only)") {
        dropdownContainer.append(`<select>
    <option>Send every 1 months</option>
    <option>Send every 2 months</option>
    <option>Send every 3 months</option>
    <option>Send every 1 year</option>
    <option>Send every 1 weeks</option>
    <option>Send every 2 weeks</option>
    <option>Send every 3 weeks</option>
    <option>Send every 4 months</option>
    <option>Send every 5 months</option>
    <option>Send every 6 months</option>
</select>`)
    } else if (label === "One Time Only") {
        dropdownContainer.html("")
    }
}



