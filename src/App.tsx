import React, { useState } from 'react';
import { Coffee, MapPin, Clock, Settings } from 'lucide-react';

const INITIAL_MENU = [
  { id: 1, name: 'Espresso', price: '45 TL' },
  { id: 2, name: 'Americano', price: '55 TL' },
  { id: 3, name: 'Latte', price: '65 TL' },
  { id: 4, name: 'Croissant', price: '70 TL' },
];

export default function App() {
  const [menu, setMenu] = useState(INITIAL_MENU);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-2xl mx-auto">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-light tracking-tighter">MODERN KAFE</h1>
        <button onClick={() => setIsAdmin(!isAdmin)} className="p-2 text-stone-400 hover:text-stone-800">
          <Settings size={20} />
        </button>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-sm uppercase tracking-widest text-stone-500 mb-6">Menü</h2>
          <div className="space-y-4">
            {menu.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b border-stone-200 pb-4">
                <span className="text-lg">{item.name}</span>
                <span className="font-medium">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

        {isAdmin && (
          <div className="bg-stone-100 p-6 rounded-lg mb-12">
            <h3 className="font-bold mb-4">Yönetim Paneli (Demo)</h3>
            <p className="text-sm text-stone-600">Burada fiyatları güncelleyebilirsiniz.</p>
          </div>
        )}

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-600">
          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <span>Kadıköy, İstanbul</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={20} />
            <span>08:00 - 22:00</span>
          </div>
        </section>
      </main>
    </div>
  );
}