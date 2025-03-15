import { useEffect, useMemo, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(150);
  const [weight, setWeight] = useState(30);
  const [bmiResult, setBmiResult] = useState(null);
  
  const calculateBmi = useMemo(
    () => weight / (height / 100) ** 2,
    [height, weight]
  );

  const handleResult = () => {
    setBmiResult(calculateBmi);
    setIsVisible(true);
  };

  return (
    <>
      <div className="bg-indigo-950 h-screen w-screen p-8 flex justify-center items-center  text-indigo-100">
        <div className=" w-full h-full bg-indigo-900 rounded-2xl">
          <h1 className="font-bold sm:text-5xl text-3xl p-4 text-center">
            BMI CALCULATOR
          </h1>
          <div className="w-[90%] sm:w-fit p-4 h-fit mx-auto rounded-2xl  mt-6 bg-indigo-500/30 backdrop-blur-md shadow-lg border border-white/10">
            <form className="flex flex-col items-center  space-y-4  sm:text-3xl">
              <div className="p-2 space-x-2 flex justify-center ">
                <input
                  type="range"
                  min={150}
                  max={220}
                  name="height"
                  onChange={(e) => setHeight(Number(e.target.value))}
                  value={height}
                />
                <label htmlFor="height">Height: {height}cm</label>
              </div>
              <div className="p-2 space-x-2 flex justify-center">
                <input
                  type="range"
                  name="Weight"
                  min={30}
                  max={250}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                />
                <label htmlFor="weight">Weight: {weight}Kg</label>
              </div>
              <button
                type="button"
                onClick={handleResult}
                className="px-4 py-2 rounded-2xl font-semibold bg-indigo-800 backdrop-blur-md shadow-lg border"
              >
                Calculate BMI
              </button>
            </form>
            {isVisible && (
              <h1 className="md:text-3xl text-2xl font-semibold text-center pt-2">
                Bmi is : {bmiResult.toFixed(2)}
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
