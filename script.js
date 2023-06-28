const name = document.getElementById('name')
const da = document.getElementById('dat')
function getTotalService() {
    var count = 0;
    var checkboxes = document.getElementsByClassName('types');
    for(i=0; i<checkboxes.length; i++)
    {
        if(checkboxes[i].checked==true)
        {
               count++
        }
    } return count;
}
 function getServiceCost(){
    sum = 0;
    var checkboxes = document.getElementsByClassName('types');
    for(i=0; i < checkboxes.length; i++)
    {
        if(checkboxes[i].checked == true){
            sum = sum + parseInt(checkboxes[i].value)
        }
    } return sum;
 }
function getYearlyMaintenanceCost()
{
 var result = 0;
//  dought of checked
const as = document.getElementById('maintenance');
 if(as.checked==true){
    result = parseInt(as.value);
 } return result;
}

function calculateDiscount(servicecost) {
    // var servicecost = getServiceCost();
    var year = getYearlyMaintenanceCost();
    var discount = 0;
    var counts = getTotalService()
    if(counts > 2){
        var ser = servicecost - (servicecost*15)/100
        discount = (ser) + (year)
        return discount;
    }
    else {
        discount = (servicecost + year)
             return discount;
    } 
}
function acty()
{ var acty = document.getElementsByClassName('act')
    for(i = 0; i<acty.length; i++){
        if(acty[i].selected==true){
            type = acty[i].value
            return type;
            break;
        }
    }
}
 function bookAppointment()
 {
    event.preventDefault();
    d = new Date(); 


    let mo = d.getMonth()+1;
    let da1 = d.getDate();
    let ye = d.getFullYear();
if(mo<10){
 mo = '0'+mo;

}
if (da1<10){
    da1 = '0'+da1;
}
 am = ye+'-'+mo+'-'+da1;
console.log(am)

  
    if(da.value<am){

        alert('The Date for Appointment date cant be less than today');
        
       
    }
    else{
       
 
     a = getServiceCost();
     b = getTotalService();
     c = getYearlyMaintenanceCost();
    d = calculateDiscount(a);
    e = acty();

    nam = (name.value).toUpperCase();
    
        const ans = document.querySelector('#answer');
        ans.innerHTML = ("Hi, " + nam + ' Your booking for ' + e + ' is successfull! ')

        const ans1 = document.querySelector('#answer1');
        ans1.innerHTML = ('The estimated service cost is Rs.'+  Math.round(d))

        
 }}