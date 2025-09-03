const TicketManagement = () => {
  const activities = [
    { 
      name: "Purchase via loyalty", 
      points: ["10", "20"],
      description: "Purchase additional items from the menu outside the BOGO offer"
    },
    { 
      name: "Win against friends in the Lush game", 
      points: ["05", "30"]
    },
    { 
      name: "Take a merchant after the visit", 
      points: ["05", "30"]
    },
    { 
      name: "Make a reservation through the app and actually attend", 
      points: ["20", "30"]
    },
    { 
      name: "Invite friends to go out via the app", 
      points: ["20", "30"]
    },
    { 
      name: "Complete 5 purchases in one week", 
      points: ["25", "30"]
    },
    { 
      name: "Reach 10 purchases in a month", 
      points: ["50", "30"]
    },
    { 
      name: "Confirm attendance via QR", 
      points: ["05", "30"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-600 text-white p-6">
          <h1 className="text-2xl font-bold">1.2</h1>
          <h2 className="text-xl font-semibold mt-1">Purchase via loyalty</h2>
        </div>
        
        {/* Activities List */}
        <div className="p-5">
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-medium">
              Purchase additional items from the menu outside the BOGO offer
            </p>
            <div className="flex mt-3">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-2xl font-bold text-blue-700">10</span>
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-700">20</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {activities.slice(1).map((activity, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="text-gray-800 font-medium flex-1 pr-4">{activity.name}</h3>
                <div className="flex space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-700">{activity.points[0]}</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-700">{activity.points[1]}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketManagement;