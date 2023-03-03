
 const Validation = (userData) =>{
    
     const regexUser= /^[A-Z0-9._%+-]+@[A-Z0-9]+.[A-Z]{2,4}$/i; 
     const regexPass= /^(?=.*\d)[a-zA-Z0-9]{6,10}$/i;

         let errors = {};

         if(!regexUser.test(userData.username)) errors.username = "Write your email properly...";
         if(userData.username.length > 35) errors.username = "Write your email properly...";
         

         if(!regexPass.test(userData.password)) errors.password = "Password not valid..." 
        //  if(userData.password.length < 6) errors.password = "Password not valid..."            
        //  if(userData.password.length > 10) errors.password = "Password not valid..."

         return errors;
     };

export default Validation;