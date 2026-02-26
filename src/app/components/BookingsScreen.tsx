import { useNavigate } from "react-router";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";
import { parkingSpots } from "../data/parkingData";

export function BookingsScreen() {
  const navigate = useNavigate();
  const bookings = [
    {
      id: 1,
      spot: parkingSpots[0],
      date: "Abr 24, 2026",
      time: "7:00 pm - 8:00 pm",
      status: "Confirmada"
    },
    {
      id: 2,
      spot: parkingSpots[1],
      date: "Abr 22, 2026",
      time: "3:00 pm - 5:00 pm",
      status: "Completada"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white p-4 border-b flex items-center gap-3">
        <button onClick={() => navigate("/map")}>
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Mis Reservas</h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-4">
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              onClick={() => navigate("/confirmation")}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative h-32">
                <img
                  src={booking.spot.image}
                  alt={booking.spot.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-2 right-2 ${booking.status === "Confirmada" ? "bg-green-600" : "bg-gray-600"} text-white px-3 py-1 rounded-lg text-xs font-semibold`}>
                  {booking.status}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 mb-2">{booking.spot.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>{booking.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{booking.spot.address}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-900 font-semibold">Total:</span>
                  <span className="text-lg font-bold text-blue-600">$ {booking.spot.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
