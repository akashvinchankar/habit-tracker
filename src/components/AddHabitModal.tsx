const AddHabitModal = () => {
  return (
    <>
      <form
        action=""
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50"
      >
        <div className="flex flex-col bg-white p-8 rounded-lg shadow-md">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <label className="text-md font-bold text-gray-800" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded mt-2"
              type="text"
              id="name"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            {/* Repeat */}
            <div>
              <label
                className="text-md font-bold text-gray-800 mt-4"
                htmlFor="repeat"
              >
                Repeat
              </label>
              <select
                className="w-full border border-gray-300 p-2 rounded mt-2"
                name="repeat"
                id="repeat"
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            {/* Goal */}
            <div>
              <label
                className="text-md font-bold text-gray-800 mt-4"
                htmlFor="goal"
              >
                Goal
              </label>
              <select
                className="w-full border border-gray-300 p-2 rounded mt-2"
                name="goal"
                id="goal"
              >
                <option value="1">1 time a day</option>
                <option value="2">2 times a day</option>
                <option value="3">3 times a day</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            {/* Time Of Day */}
            <div>
              <label
                className="text-md font-bold text-gray-800 mt-4"
                htmlFor="time"
              >
                Time Of Day
              </label>
              <select
                className="w-full border border-gray-300 p-2 rounded mt-2"
                name="time"
                id="time"
              >
                <option value="anytime">Anytime</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
              </select>
            </div>
            {/* Start Date */}
            <div>
              <label
                className="text-md font-bold text-gray-800 mt-4"
                htmlFor="start-date"
              >
                Start Date
              </label>
              <select
                className="w-full border border-gray-300 p-2 rounded mt-2"
                name="start-date"
                id="start-date"
              >
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          {/* Discard */}
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => console.log("Discard")}
          >
            Discard
          </button>
          {/* Save */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => console.log("Save")}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddHabitModal;
