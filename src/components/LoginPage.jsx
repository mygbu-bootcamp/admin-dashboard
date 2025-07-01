import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Shield, User, Lock, University } from 'lucide-react';

const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    role: ''
  });

  const adminRoles = [
    { value: 'registrar', label: 'Registrar (Master Admin)' },
    { value: 'dean', label: 'Dean' },
    { value: 'hod', label: 'Head of Department' },
    { value: 'iqac', label: 'IQAC Officer' },
    { value: 'clubs', label: 'Clubs Coordinator' },
    { value: 'exam', label: 'Exam Controller' },
    { value: 'research', label: 'Research Cell Admin' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password && credentials.role) {
      onLogin(credentials.role);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <University className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">GBU Admin Portal</h1>
          <p className="text-gray-600">MyGBU Smart Campus ERP</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-center flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Admin Login
            </CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium">
                  Username
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    className="pl-10"
                    value={credentials.username}
                    onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm font-medium">
                  Select Role
                </Label>
                <Select
  value={credentials.role}
  onValueChange={(value) => setCredentials({ ...credentials, role: value })}
>
  <SelectTrigger className="bg-white text-gray-800 border border-gray-300 hover:border-gray-400 focus:ring-2 focus:ring-primary">
    <SelectValue placeholder="Choose your admin role" />
  </SelectTrigger>
  <SelectContent className="bg-white text-gray-800 shadow-lg border border-gray-200">
    {adminRoles.map((role) => (
      <SelectItem
        key={role.value}
        value={role.value}
        className="hover:bg-gray-100 focus:bg-gray-100"
      >
        {role.label}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

              </div>

             <Button 
  type="submit" 
  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 mt-6"
  disabled={!credentials.username || !credentials.password || !credentials.role}
>
  Sign In to Dashboard
</Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Secured by GBU IT Services | Need help? Contact support
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;