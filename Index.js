document.getElementById('gangLog').addEventListener('click', buttonHandler);
document.getElementById('arrestLog').addEventListener('click', buttonHandler);
document.getElementById('firearmLog').addEventListener('click', buttonHandler);
document.getElementById('wantedPersonLog').addEventListener('click', buttonHandler);
document.getElementById('courtLog').addEventListener('click', buttonHandler);


//This object controls all the global variables used in JS
let GlobalVars = {
    enteredPassword: "Investigator2025",
    googleForm_GangLog: "https://docs.google.com/forms/d/e/1FAIpQLScOFb5zmJbHRTe_nCAi166fm-toHuZZZEhKxKQzp_QhudiVUA/viewform?usp=sf_link",

    googleForm_ArrestLog: "https://docs.google.com/forms/d/e/1FAIpQLSenvZEZQCoz0XMmFB5ZGp1H_DfE9e00WlD7AXyaK8wO3Cbevw/viewform?usp=sf_link",

    googleForm_FirearmLog: "https://docs.google.com/forms/d/e/1FAIpQLSfJFOPItJlB9g_UadjOvn_2ukat_ACi-J5s4rpTmpVxOXGAcw/viewform?usp=sf_link",

    googleForm_WantedPersonLog: "https://docs.google.com/forms/d/e/1FAIpQLSfMUmY4IbWYwd7auMCLtvZb08TJdml9AWgBrNQkepLrthW0ZA/viewform?usp=sf_link",

    googleForm_CourtLog: "https://docs.google.com/forms/d/e/1FAIpQLSf2Xzm29mcFVH13te4aay3yV9TU7iTnlMSdP2bm-n-e6_IMXg/viewform?usp=sf_link",

    googleForm_GeneralPropertiesLog: "https://docs.google.com/forms/d/e/1FAIpQLSfD3VYKQArn8KZ02i9pIamMhmfdL1UBXfJdeLTwm9ik3Gmd_g/viewform?usp=sf_link",
};


//This function uses a switch case to control and listen to the respective button click 
function buttonHandler(event) {
    switch (event.target.id) {
        case 'gangLog':
            console.log("Gang Log Button Click");
            let password = prompt("Enter password");
            if (GlobalVars.enteredPassword === password) {
                window.location.href = GlobalVars.googleForm_GangLog;
            } else {
                alert("Incorrect Password!, Link Detective Inspector Shamal Wisdom");
            }
            break;
        case 'arrestLog':
            console.log("Arrest Log Button Click");
            //This redirects the url to the arrest log
            window.location.href = GlobalVars.googleForm_ArrestLog;
            break;
        case 'firearmLog':
            console.log("Firearm Log Button Click");
            // This redirects the url to the firearm log
            window.location.href = GlobalVars.googleForm_FirearmLog;
            break;
        case 'wantedPersonLog':
            console.log("Wanted Person Button Click");
            // This redirects teh url to the wwanted person log
            window.location.href = GlobalVars.googleForm_WantedPersonLog;
            break;
        case 'courtLog':
            console.log("Court Log Button Click");
            // This redriects the url to the court log
            window.location.href = GlobalVars.googleForm_CourtLog;
            break;
        default:
            console.log("No button clicked");
    }
}
