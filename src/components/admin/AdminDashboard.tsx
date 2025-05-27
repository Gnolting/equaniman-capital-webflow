
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Mail, Eye, TrendingUp, Building2, FileText } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Visitantes este mes',
      value: '2,847',
      change: '+12%',
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      title: 'Mensajes recibidos',
      value: '156',
      change: '+23%',
      icon: Mail,
      color: 'text-green-600'
    },
    {
      title: 'Clientes activos',
      value: '89',
      change: '+8%',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Conversiones',
      value: '12.3%',
      change: '+2.1%',
      icon: TrendingUp,
      color: 'text-amber-600'
    }
  ];

  const recentMessages = [
    {
      name: 'Carlos Mendoza',
      email: 'carlos@empresa.com',
      message: 'Interesado en planificación financiera para mi empresa...',
      time: 'Hace 2 horas'
    },
    {
      name: 'María González',
      email: 'maria.gonzalez@gmail.com',
      message: 'Necesito asesoría para inversiones personales...',
      time: 'Hace 4 horas'
    },
    {
      name: 'Roberto Silva',
      email: 'roberto.silva@corp.com',
      message: 'Consulta sobre gestión de carteras...',
      time: 'Hace 1 día'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">Resumen de la actividad de tu sitio web</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change} vs mes anterior</p>
                </div>
                <div className={`p-3 rounded-full bg-slate-100 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              Mensajes Recientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((message, index) => (
                <div key={index} className="border-l-4 border-amber-500 pl-4 py-2">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-slate-900">{message.name}</h4>
                    <span className="text-xs text-slate-500">{message.time}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">{message.email}</p>
                  <p className="text-sm text-slate-700">{message.message}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer">
                <FileText className="h-5 w-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-medium">Actualizar contenido</p>
                  <p className="text-sm text-slate-600">Editar texto de secciones</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer">
                <Building2 className="h-5 w-5 text-green-600 mr-3" />
                <div>
                  <p className="font-medium">Gestionar marcas</p>
                  <p className="text-sm text-slate-600">Agregar logos de clientes</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer">
                <Mail className="h-5 w-5 text-purple-600 mr-3" />
                <div>
                  <p className="font-medium">Ver mensajes</p>
                  <p className="text-sm text-slate-600">Revisar consultas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
