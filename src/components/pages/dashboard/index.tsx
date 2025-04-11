
"use client";
import React, { useEffect, useState } from "react";
import Header from "./header";
import ProductivitySection from "./productivity-section";
import StatsCard from "./stats-card";
import { statsCardsData, tasksData } from "@/data/data";
import { SlidersHorizontal } from "lucide-react";
import { Card } from "@/components/ui/card";
import TodaysTask from "./todays-task";
import { Metadata } from "next";
import { getToken } from "@/utils";
import { useUserSession } from "@/contexts/useUserSession";

export const metadata: Metadata = {
  title: "Hudddle | Dashboard",
};

const PageDashboard: React.FC = () => {
  const {currentUser,loading,error} = useUserSession();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error:{error}</div>;
  return (
    <section className="pt-8 pb-10 px-12">
      <Header
        name={currentUser.last_name || "Guest"}
        isInWorkroom={false}
        teamName="Design Team"
        companyName="Atlassian Incorporated"
      />
      <div className="mt-10">
        <p className="text-custom-semiBlack font-semibold text-right">
          Streaks <span className="text-custom-yellow">{currentUser?.average_task_time}</span>
         
        </p>
        <ProductivitySection />
        {currentUser && (
          <h1 className="mt-10 font-bold text-slate-600 text-xl">
            Welcome, {currentUser.first_name}
          </h1>
        )}
        <div className="grid grid-cols-2 mt-2 gap-x-10 gap-y-5">
          {statsCardsData.map((stat, index) => (
            <StatsCard
              key={index}
              image={stat.image}
              title={stat.title}
              description={stat.description}
              progressValue={stat.progressValue}
              progressColor={stat.progressColor}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-between items-center">
          <h1 className="font-bold text-slate-600 text-xl">Today's task</h1>
          <SlidersHorizontal
            size={18}
            color="#D9D9D9"
            className="cursor-pointer"
          />
        </div>
        <Card className="mt-5 p-4 border-none max-h-60 overflow-y-auto neo-effect">
          {tasksData.map((task, index) => (
            <TodaysTask key={index} task={task} />
          ))}
        </Card>
      </div>
    </section>
  );
};

export default PageDashboard;

// "use client";
// import React, { useContext, useEffect, useState } from "react";
// import Header from "./header";
// import ProductivitySection from "./productivity-section";
// import StatsCard from "./stats-card";
// import { statsCardsData, tasksData } from "@/data/data";
// import { SlidersHorizontal } from "lucide-react";
// import { Card } from "@/components/ui/card";
// import TodaysTask from "./todays-task";
// import { Metadata } from "next";
// import { getToken } from "@/utils";
// import { AuthContext } from "@/contexts/AuthContext";

// export const metadata: Metadata = {
//   title: "Hudddle | Dashboard",
// };
// const PageDashboard: React.FC = () => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getCurrentUser = async () => {
//       try {
//         const token = getToken();
//         console.log(token);
//         if (!token){
//           throw new Error("No access token found");
//         }
//         const response = await fetch("https://hudddle-backend.onrender.com/api/v1/auth/me", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         console.log(response);
//         if (!response.ok) {
//           const errorResponse = await response.json();
//           throw new Error(`${response.status} - ${errorResponse.message}`);
//         };
//         const userData = await response.json();
//         setCurrentUser(userData);
//         console.log(userData);
//         return userData;
       
//       } catch (error) {
//         console.error("Failed to fetch user data:", error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getCurrentUser();
//   }, []);


//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }
//   return (
//     <section className="pt-8 pb-10 px-12">
//       <Header
//         name="Esther"
//         isInWorkroom={false}
//         teamName="Design Team"
//         companyName="Atlassian Incorporated"
//       />
//       <div className="mt-10">
//         <p></p>
//         <p className="text-custom-semiBlack font-semibold text-right">
//           Streaks <span className="text-custom-yellow">5 days</span>
//         </p>
//         <ProductivitySection />
//         {currentUser && (
//           <h1 className="mt-10 font-bold text-slate-600 text-xl">
//             Welcome, {currentUser.name}
            
//           </h1>
//         )}
//         <div className="grid grid-cols-2 mt-2 gap-x-10 gap-y-5">
//           {statsCardsData.map((stat, index) => (
//             <StatsCard
//               key={index}
//               image={stat.image}
//               title={stat.title}
//               description={stat.description}
//               progressValue={stat.progressValue}
//               progressColor={stat.progressColor}
//             />
//           ))}
//         </div>

//         <div className="mt-10 flex justify-between items-center">
//           <h1 className="font-bold text-slate-600 text-xl">Today's task</h1>
//           <SlidersHorizontal
//             size={18}
//             color="#D9D9D9"
//             className="cursor-pointer"
//           />
//         </div>
//         <Card className="mt-5 p-4 border-none max-h-60 overflow-y-auto neo-effect">
//           {tasksData.map((task, index) => (
//             <TodaysTask key={index} task={task} />
//           ))}
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default PageDashboard;
// // import React, { useEffect } from "react";
// // import Header from "./header";
// // import ProductivitySection from "./productivity-section";
// // import StatsCard from "./stats-card";
// // import { statsCardsData, tasksData } from "@/data/data";
// // import { SlidersHorizontal } from "lucide-react";
// // import { Card } from "@/components/ui/card";
// // import TodaysTask from "./todays-task";
// // import { Metadata } from "next";

// // export const metadata: Metadata = {
// //   title: "Hudddle | Dashboard",
// //   //description: "Generated by create next app",
// // };

// // const PageDashboard: React.FC = () => {
// //   const getCurrentUser = async () => {
// //     try {
// //       const token=process.env.HUDDLE_ACCESS_TOKEN;
// //       const response = await fetch("https://hudddle-backend.onrender.com/api/v1/auth/me", {
// //         method: "GET",
// //         headers: {
// //           "Content-Type": "application/json",
// //           "Authorization": `Bearer ${token}`,
// //         }
// //       });
  
// //       if (!response.ok) {
// //         throw new Error(`Error: ${response.status} ${response.statusText}`);
// //       }
// //       const userData = await response.json();
// //       console.log("User Data:", userData);
// //       return userData;
// //     } catch (error) {
// //       console.error("Failed to fetch user data:", error);
// //     }
// //   };

// //  const currentUser = getCurrentUser();
  
// //  console.log(currentUser);
// //   return (
// //     <section className="pt-8 pb-10 px-12">
// //       <Header
// //         name="Esther"
// //         isInWorkroom={false}
// //         teamName="Design Team"
// //         companyName="Atlassian Incorporated"
// //       />
// //       <div className="mt-10">
// //         <p className="text-custom-semiBlack font-semibold text-right">
// //           Streaks <span className="text-custom-yellow">5 days</span>
// //         </p>
// //         <ProductivitySection />
// //         <h1 className="mt-10 font-bold text-slate-600 text-xl">{currentUser}</h1>
// //         <div className="grid grid-cols-2 mt-2 gap-x-10 gap-y-5">
// //           {statsCardsData.map((stat, index) => (
// //             <StatsCard
// //               key={index}
// //               image={stat.image}
// //               title={stat.title}
// //               description={stat.description}
// //               progressValue={stat.progressValue}
// //               progressColor={stat.progressColor}
// //             />
// //           ))}
// //         </div>

// //         <div className="mt-10 flex justify-between items-center">
// //           <h1 className="font-bold text-slate-600 text-xl">Today's task</h1>
// //           <SlidersHorizontal
// //             size={18}
// //             color="#D9D9D9"
// //             className="cursor-pointer"
// //           />
// //         </div>
// //         <Card className="mt-5 p-4 border-none max-h-60 overflow-y-auto neo-effect">
// //           {tasksData.map((task, index) => (
// //             <TodaysTask key={index} task={task} />
// //           ))}
// //         </Card>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PageDashboard;
