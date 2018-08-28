$( document ).ready(function() {
    handleChangeCheckBox();
    handleChangeRadio();
    $('input[type=checkbox][name=checkbox]').change(function() {
        handleChangeCheckBox();
     });
     $('input[type=radio][name=radio]').change(function() {
        handleChangeRadio();
     });
     $('input[type=checkbox][id=checkboxswitchone]').change(function() {
        handleChangeCheckSwitchOne(this);
     });
     $('input[type=checkbox][id=checkboxswitchtwo]').change(function() {
        handleChangeCheckSwitchTwo(this);
     });
});

function handleChangeCheckBox() {
    $('#checkboxsummary').html('');
    $('input[type=checkbox][name=checkbox]').each(function(index){
        if(this.checked) {
            var li = $('<li>',{
                text: 'Checkbox ' + this.value + " is checked"
            });
        }
        else {
            var li = $('<li>',{
                text: 'Checkbox ' + this.value + " is not checked"
            });
        }
        li.appendTo('#checkboxsummary');
    });
}

function handleChangeRadio() {
    $('#radiosummary').html('');
    var selectedRadio = $('input[type=radio][name=radio]').filter(':checked');
    var p = $('<p>',{
        text: 'You have select the value ==> ' + selectedRadio.val()
    }).appendTo('#radiosummary');
}

function handleChangeCheckSwitchOne(input) {
    $('#switchsummary').html('');
    if(input.checked) {
        var p = $('<p>',{
            text: 'Switch One is checked !!! '
        }).appendTo('#switchsummary');
    } else {
        var p = $('<p>',{
            text: 'Switch One is not checked !!! '
        }).appendTo('#switchsummary');
    }
}
function handleChangeCheckSwitchTwo(input) {
    $('#switchsummarytwo').html('');
    if(input.checked) {
        var p = $('<p>',{
            text: 'Switch Two is checked !!! '
        }).appendTo('#switchsummarytwo');
    } else {
        var p = $('<p>',{
            text: 'Switch Two is not checked !!! '
        }).appendTo('#switchsummarytwo');
    }
}
