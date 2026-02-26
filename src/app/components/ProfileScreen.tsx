import { useNavigate } from "react-router";
import { ArrowLeft, User, Mail, Phone, MapPin, CreditCard, Bell, Lock, HelpCircle, LogOut, ChevronRight } from "lucide-react";

export function ProfileScreen() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: User, label: "Información personal", path: "#" },
    { icon: CreditCard, label: "Métodos de pago", path: "#" },
    { icon: MapPin, label: "Mis direcciones", path: "#" },
    { icon: Bell, label: "Notificaciones", path: "#" },
    { icon: Lock, label: "Privacidad y seguridad", path: "#" },
    { icon: HelpCircle, label: "Ayuda y soporte", path: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Header */}
      <div className="bg-white p-4 border-b flex items-center gap-3">
        <button onClick={() => navigate("/map")}>
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Mi Perfil</h1>
      </div>

      {/* Profile Info */}
      <div className="bg-white p-6 mb-4">
        <div className="flex items-center gap-4 mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Carlos Rodríguez</h2>
            <p className="text-sm text-gray-600 mb-1">carlos.rodriguez@email.com</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
              <span className="text-sm text-gray-600 ml-1">(4.9)</span>
            </div>
          </div>
        </div>
        <button className="w-full py-2 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors">
          Editar perfil
        </button>
      </div>

      {/* Stats */}
      <div className="bg-white p-4 mb-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">24</div>
            <div className="text-xs text-gray-600">Reservas</div>
          </div>
          <div className="text-center border-l border-r border-gray-200">
            <div className="text-2xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-xs text-gray-600">Favoritos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">156</div>
            <div className="text-xs text-gray-600">Puntos</div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="bg-white mb-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
          >
            <item.icon className="w-5 h-5 text-gray-600" />
            <span className="flex-1 text-left text-gray-900">{item.label}</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        ))}
      </div>

      {/* Logout */}
      <div className="bg-white mb-4">
        <button
          onClick={() => navigate("/")}
          className="w-full flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors text-red-600"
        >
          <LogOut className="w-5 h-5" />
          <span className="flex-1 text-left font-semibold">Cerrar sesión</span>
        </button>
      </div>

      {/* Version */}
      <div className="text-center text-sm text-gray-500 pb-6">
        Versión 1.0.0
      </div>
    </div>
  );
}
