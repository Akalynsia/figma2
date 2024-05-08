import React from "react";

const App = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <main className="flex flex-col gap-5 w-[552px] mt-20 ml-80">
          <div className="font-[700] text-[80px] font-montserrat text-#101A1C">
            LOGIN
          </div>
          <div className="flex flex-col gap-5">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                id
                placeholder="Username"
                className="p-3 border w-[527px] rounded-lg"
                name
              ></input>
              <input
                type="text"
                id
                placeholder="Password"
                className="p-3 border w-[527px] rounded-lg"
                name
              ></input>
            </form>
            <button className="p-2 bg-[#101A1C] text-white w-[222px] h-[64px] text-[25px] font-[700] rounded-lg">
              LOGIN
            </button>
            <div className="flex mt-10 items-center gap-4">
              <div className="w-[246px] bg-[#101A1C] h-[1px]"></div>
              <div className="font-[700] text-[25px] font-montserrat text-#101A1C">
                OR
              </div>
              <div className="w-[246px] bg-[#101A1C] h-[1px]"></div>
            </div>
            <div className="flex justify-around">
              <img
                src="./google.png"
                alt="google icon"
                style={{ width: "30px", height: "30px", marginRight: "-300px" }}
              />
              <img
                src="./facebook.png"
                alt="facebook icon"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div className="text-#101A1C text-[25px] font-[700]">
              Not yet registered? Click here to sign up.
            </div>
          </div>
        </main>
        <div>
          <img
            src="parrot.png"
            alt="parrot"
            style={{
              width: "800px",
              height: "945px",
              borderTopLeftRadius: "200px",
              borderBottomLeftRadius: "200px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
