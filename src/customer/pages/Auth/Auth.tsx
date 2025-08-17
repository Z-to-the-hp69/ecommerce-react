// import React, { useState } from "react";
// import LoginFrom from "./LoginForm";
// import RegisterForm from "./RegisterForm";
// import { Button } from "@mui/material";

// const Auth = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   return (
//     <div className="flex justify-center h-[90vh items-center">
//       <div className="max-w-md h-[85vh] rounded-md shadow-lg">
//         <img
//           className="w-full rounded-t-md"
//           src="https://thumbs.dreamstime.com/b/login-banner-speech-bubble-label-sticker-sign-template-ribbon-349093122.jpg"
//           alt=""
//         />
//         {/* <div className='mt-8 px-10'></div> */}
//         {isLogin ? <LoginFrom /> : <RegisterForm />}
//         <div className="flex items-center gap-1 justify-center mt-5">
//           <p>{isLogin && "Don't"}have Account</p>
//           <Button size="small" onClick={() => setIsLogin(!isLogin)}>
//             {isLogin ? "Create Account" : "login"}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Auth;

import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Button } from "@mui/material";
import Taurus from "./Taurus.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center h-[90vh] items-center">
      <div className="max-w-md h-[85vh] rounded-md shadow-lg">
        <img
          className="w-full rounded-t-md"
          //   src="https://thumbs.dreamstime.com/b/login-banner-speech-bubble-label-sticker-sign-template-ribbon-349093122.jpg"
          src={Taurus}
          alt="banner"
        />
        <div className="mt-8 px-10">
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="flex items-center gap-1 justify-center mt-5">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Button size="small" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create Account" : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
