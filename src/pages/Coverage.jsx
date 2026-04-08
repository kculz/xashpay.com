import { Star } from 'lucide-react';
import Card from '../components/ui/Card';
import PillBadge from '../components/ui/PillBadge';
import Button from '../components/ui/Button';
import { COVERAGE_DATA } from '../../data/constants';

export default function Coverage() {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="bg-[#0B3C5D] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <PillBadge variant="blue" className="bg-white/10 text-white border-white/20 mb-6">International Coverage</PillBadge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Serving Africa & Asia
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            XashPay provides digital payment services across 12 countries in Africa and Asia. From airtime and data to electricity and TV subscriptions, we're expanding our footprint to serve you better.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {COVERAGE_DATA.map((regionData, idx) => (
            <div key={idx} className="mb-20 last:mb-0">
               <div className="mb-10 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{regionData.region}</h2>
                  <p className="text-gray-600 text-lg">{regionData.description}</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regionData.countries.map((country, cIdx) => (
                    <Card key={cIdx} className="p-8 relative overflow-hidden">
                       <div className="flex justify-between items-center mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            <span className="text-3xl" role="img" aria-label={`${country.name} flag`}>
                              {{
                                'Zimbabwe': '🇿🇼', 'South Africa': '🇿🇦', 'Botswana': '🇧🇼', 'DR Congo': '🇨🇩',
                                'Kenya': '🇰🇪', 'Tanzania': '🇹🇿', 'Uganda': '🇺🇬', 'Ethiopia': '🇪🇹', 'Somalia': '🇸🇴',
                                'Nigeria': '🇳🇬', 'India': '🇮🇳', 'Pakistan': '🇵🇰'
                              }[country.name]}
                            </span>
                            {country.name}
                          </h3>
                          {country.primary && (
                            <Star className="text-xash-gold" fill="currentColor" size={24} />
                          )}
                       </div>

                       <div className="mb-6">
                         <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                           Services Available
                         </div>
                         <div className="flex flex-wrap gap-2">
                           {country.services.map((svc, i) => (
                              <PillBadge key={i} variant="gray">{svc}</PillBadge>
                           ))}
                         </div>
                       </div>

                       <div>
                         <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                           Supported Networks
                         </div>
                         <div className="flex flex-wrap gap-2">
                           {country.networks.map((net, i) => (
                              <PillBadge key={i} variant="blue" className="bg-blue-50 text-blue-700">{net}</PillBadge>
                           ))}
                         </div>
                       </div>
                    </Card>
                  ))}
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
