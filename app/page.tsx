import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  BarChart3,
  Shield,
  Monitor,
  FileText,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white animate-fade-in scroll-smooth">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-bold text-xl text-blue-900">Lab Trak Pro</div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a
                href="https://mern-stack-lis.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </a>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="relative py-20 px-4 overflow-hidden animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 z-10"></div>
            <img
              src="/placeholder.jpg?height=800&width=1200"
              alt="Modern medical laboratory"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 z-10">
            {/* DNA Helix */}
            <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-float-slow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-white"
              >
                <path
                  d="M4 6c0 4.4 3.6 8 8 8s8-3.6 8-8M4 18c0-4.4 3.6-8 8-8s8 3.6 8 8M12 2v20"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="6" r="2" fill="currentColor" />
                <circle cx="12" cy="18" r="2" fill="currentColor" />
              </svg>
            </div>

            {/* Microscope */}
            <div className="absolute top-32 right-20 w-12 h-12 opacity-20 animate-float">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-white"
              >
                <path
                  d="M6 18h8M6 14h2m6 0h2M9 9l1.5-1.5L12 9l1.5-1.5L15 9v5H9V9z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="4"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M12 6v3" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            {/* Test Tubes */}
            <div className="absolute bottom-32 left-20 w-10 h-10 opacity-20 animate-float-slow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-white"
              >
                <rect
                  x="9"
                  y="2"
                  width="6"
                  height="20"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M9 10h6" stroke="currentColor" strokeWidth="2" />
                <path d="M9 14h6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            {/* Medical Cross */}
            <div className="absolute top-40 right-32 w-8 h-8 opacity-20 animate-float">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-white"
              >
                <path
                  d="M12 2v20M2 12h20"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </div>

            {/* Lab Equipment */}
            <div className="absolute bottom-20 right-10 w-14 h-14 opacity-20 animate-float-slow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-full h-full text-white"
              >
                <path
                  d="M9 2v6l-4 4v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8l-4-4V2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M9 2h6" stroke="currentColor" strokeWidth="2" />
                <path d="M9 16h6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div className="container mx-auto text-center max-w-4xl relative z-20">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Modern Lab Management
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Modern LIMS Software for{" "}
              <span className="text-blue-200">Local Diagnostic Labs</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto drop-shadow">
              Manage test records, track orders, and streamline your lab—all
              with a fast, secure system built for your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-100 text-lg px-8 py-3 shadow-lg transition-transform duration-200 hover:scale-105"
              >
                <a
                  href="https://mern-stack-lis.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-white text-blue-600 hover:bg-blue-50 shadow-lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-20 px-4 bg-white animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Labs Love Our LIMS
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Built specifically for Philippine diagnostic labs with features
                that matter most
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <FileText className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">
                    Easy Patient & Test Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Streamline patient records and test tracking with our
                    intuitive interface designed for busy labs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">
                    Built-in Order Analytics Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get insights into your lab performance with comprehensive
                    analytics and reporting tools.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <Monitor className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">
                    Sleek, Modern Interface
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Clean, intuitive design that your team will love to use
                    every day.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">
                    Local Deployment = Full Data Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Keep your sensitive patient data secure with local
                    deployment options.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">
                    Multi-user Access Control
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Manage team permissions and access levels for different
                    roles in your lab.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">
                    Philippine Lab Focused
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Built with local requirements and workflows in mind for
                    maximum efficiency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="py-20 px-4 bg-gray-50 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Flexible subscription plans
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-colors">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-blue-600">
                      LIMS Pricing Plan
                    </CardTitle>
                    <CardDescription>
                      For most labs and clinics — includes setup, updates, and
                      support
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                        <span className="font-medium">Setup Fee</span>
                        <span className="text-xl font-bold text-blue-600">
                          ₱10,000
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">
                          Monthly Subscription
                        </span>
                        <span className="text-xl font-bold text-blue-600">
                          ₱1,000
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-2 border-green-200">
                        <span className="font-medium">Set-up Fee + 1 year</span>
                        <span className="text-xl font-bold text-green-800">
                          ₱20,000
                        </span>
                        <Badge className="ml-2 bg-green-100 text-green-800">
                          Save ₱2,000
                        </Badge>
                      </div>
                    </div>
                    <div className="mt-8 text-left text-sm text-gray-700">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        With ₱10,000 Setup (One-time fee):
                      </h4>
                      <ul className="list-disc list-inside mb-4">
                        <li>System installation (local)</li>
                        <li>Initial database setup</li>
                        <li>1-on-1 onboarding/training for staff</li>
                        <li>Basic data import assistance</li>
                        <li>Branding (clinic name/logo)</li>
                      </ul>
                      <h4 className="font-semibold text-blue-800 mb-2">
                        With ₱1,000/month Subscription:
                      </h4>
                      <ul className="list-disc list-inside">
                        <li>Secure system access</li>
                        <li>Automatic backups</li>
                        <li>Email/chat support</li>
                        <li>Regular updates and new features</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card className="max-w-3xl mx-auto bg-green-50 border-green-200 mt-8">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-green-800 mb-2">
                        Benefits
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700 mb-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          <span>No long-term commitment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          <span>Automatic updates</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="max-w-3xl mx-auto bg-blue-50 border-blue-200 mt-4">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-blue-800 mb-2">
                        System Requirements
                      </h4>
                      <ul className="text-blue-900 text-sm space-y-2 list-disc list-inside">
                        <li>Intel Core i3 or AMD Ryzen equivalent</li>
                        <li>8 GB RAM</li>
                        <li>1 TB SSD</li>
                        <li>Windows 10</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
                <Card className="max-w-3xl mx-auto bg-yellow-50 border-yellow-200 mt-4">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-yellow-800 mb-2">
                        Demo Account
                      </h4>
                      <div className="flex flex-col items-center gap-2 text-yellow-900 text-base">
                        <div>
                          <span className="font-semibold">Username:</span> demo
                        </div>
                        <div>
                          <span className="font-semibold">Password:</span>{" "}
                          demo123
                        </div>
                      </div>
                      <p className="text-xs text-yellow-700 mt-2">
                        Use these credentials to try the live demo.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Lab?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free product walkthrough or book a live demo now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Book a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
            >
              Talk to Sales
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
            >
              See Full Features
            </Button>
          </div>
        </div>
      </section> */}

        {/* Testimonials */}
        <section
          id="testimonials"
          className="py-20 px-4 bg-white animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Trusted by diagnostic labs across the Philippines
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-4">
                    "After switching to this LIMS, we cut down report delays by
                    50%!"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-blue-600">AD</span>
                    </div>
                    <div>
                      <div className="font-semibold"></div>
                      <div className="text-gray-600">
                        Acccusaver Diagnostics - Laoag City
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-4">
                    "The interface is clean, simple, and our team learned it
                    fast."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-blue-600">BLD</span>
                    </div>
                    <div>
                      <div className="font-semibold"></div>
                      <div className="text-gray-600">
                        Biolab Diagnostic Center - Laoag City
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 bg-gray-50 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Let's Talk
              </h2>
              <p className="text-xl text-gray-600">
                Ready to transform your lab operations?
              </p>
            </div>

            <Card className="max-w-2xl mx-auto border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">AB</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Alvin Bregana
                  </h3>
                  <p className="text-gray-600">AJBregs Digital Solutions</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">0999-772-5143</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">alvinbregana@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">
                      Servicing labs across the Philippines
                    </span>
                  </div>
                </div>

                {/* <Button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-lg py-3">
                Schedule a Call
              </Button> */}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <div className="font-bold text-xl mb-4">LIMS Pro</div>
                <p className="text-gray-400">
                  Modern lab management software for Philippine diagnostic labs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 AJBregs Digital Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
