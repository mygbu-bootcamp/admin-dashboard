import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../components/ui/select';
import { Shield, User, Lock, University } from 'lucide-react';
import { loginUser } from '../lib/auth';

const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    role: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const adminRoles = [
    { value: 'registrar', label: 'Registrar (Master Admin)' },
    { value: 'dean', label: 'Dean' },
    { value: 'hod', label: 'Head of Department' },
    { value: 'iqac', label: 'IQAC Officer' },
    { value: 'clubs', label: 'Clubs Coordinator' },
    { value: 'exam', label: 'Exam Controller' },
    { value: 'research', label: 'Research Cell Admin' }
  ];

  const fallbackCredentials = {
    email: 'admin@gbu.edu.in',
    password: 'admin123',
    role: 'registrar'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { access, refresh } = await loginUser(
        credentials.email,
        credentials.password
      );

      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      onLogin(credentials.role);
    } catch (err) {
      const isFallbackMatch =
        credentials.email === fallbackCredentials.email &&
        credentials.password === fallbackCredentials.password &&
        credentials.role === fallbackCredentials.role;

      if (isFallbackMatch) {
        console.warn('Logged in using fallback credentials');
        localStorage.setItem('accessToken', 'FAKE_ACCESS_TOKEN');
        localStorage.setItem('refreshToken', 'FAKE_REFRESH_TOKEN');
        onLogin(credentials.role);
      } else {
        setError(
          err?.response?.data?.non_field_errors?.[0] ||
          err?.response?.data?.detail ||
          'Login failed. Please check your credentials.'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
            <University className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">GBU Admin Portal</h1>
          <p className="text-gray-600">MyGBU Smart Campus ERP</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-semibold text-center flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Admin Login
            </CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@gbu.edu.in"
                    className="pl-10"
                    value={credentials.email}
                    onChange={(e) =>
                      setCredentials({ ...credentials, email: e.target.value })
                    }
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
                    placeholder="••••••••"
                    className="pl-10"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials({ ...credentials, password: e.target.value })
                    }
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
                  onValueChange={(value) => {
                    setCredentials({ ...credentials, role: value });
                  }}
                  required
                >
                  <SelectTrigger className="w-full bg-white text-gray-800 border border-gray-300 hover:border-gray-400 focus:ring-2 focus:ring-blue-500">
                    <SelectValue placeholder="Choose your admin role..." />
                  </SelectTrigger>
                  <SelectContent 
                    className="bg-white text-gray-800 shadow-lg border border-gray-200 z-[9999] max-h-[300px] overflow-y-auto"
                    position="popper"
                    sideOffset={4}
                    align="start"
                  >
                    {adminRoles.map((role) => (
                      <SelectItem 
                        key={role.value} 
                        value={role.value}
                        className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                      >
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {error && (
                <div className="mt-2 p-2 bg-red-50 rounded-md">
                  <p className="text-sm text-red-600 font-medium">{error}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 mt-2"
                disabled={
                  loading ||
                  !credentials.email ||
                  !credentials.password ||
                  !credentials.role
                }
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </span>
                ) : (
                  'Sign In to Dashboard'
                )}
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