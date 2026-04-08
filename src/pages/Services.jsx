import { ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import PillBadge from '../components/ui/PillBadge';
import Button from '../components/ui/Button';
import { SERVICES_DATA } from '../../data/constants';

export default function Services() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <PillBadge variant="blue" className="mb-6">Our Services</PillBadge>
          <h1 className="text-4xl md:text-5xl font-bold text-xash-primary mb-6 tracking-tight">
            Complete Global Payment Solutions
          </h1>
          <p className="text-xl text-gray-600">
            Browse through our comprehensive range of services available across multiple countries.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start">
                <div className={`w-20 h-20 flex-shrink-0 ${service.color} text-white rounded-3xl flex items-center justify-center shadow-lg`}>
                  <Icon size={40} />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">{service.name}</h2>
                    <p className="text-lg text-gray-600">{service.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                       <ArrowRight size={18} className="text-xash-primary" /> Key Features
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 before:content-['•'] before:text-xash-primary before:mr-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                       <ArrowRight size={18} className="text-xash-primary" /> Available in
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.availableIn.map((country, idx) => (
                        <PillBadge key={idx} variant="gray" className="bg-gray-100">{country}</PillBadge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <a href="https://wa.me/27655971539?text=Hello" target="_blank" rel="noopener noreferrer">
                      <Button variant="secondary" className="w-full md:w-auto text-white bg-blue-600 hover:bg-blue-700">
                        Purchase Now on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}