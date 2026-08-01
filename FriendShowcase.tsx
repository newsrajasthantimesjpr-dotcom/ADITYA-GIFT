/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Hero from './components/Hero';
import FriendShowcase from './components/FriendShowcase';
import Footer from './components/Footer';
import { friends, Friend } from './data';

export default function App() {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  const handleNext = () => {
    if (!selectedFriend) return;
    const currentIndex = friends.findIndex((f) => f.id === selectedFriend.id);
    const nextIndex = (currentIndex + 1) % friends.length;
    setSelectedFriend(friends[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedFriend) return;
    const currentIndex = friends.findIndex((f) => f.id === selectedFriend.id);
    const prevIndex = (currentIndex - 1 + friends.length) % friends.length;
    setSelectedFriend(friends[prevIndex]);
  };

  return (
    <main className="relative bg-[#030308] text-white min-h-screen font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Studio 3D Landing Page */}
      <Hero onSelectFriend={(friend) => setSelectedFriend(friend)} />

      {/* Footer */}
      <Footer />

      {/* 16:9 3D Animation Showcase Modal */}
      <AnimatePresence>
        {selectedFriend && (
          <FriendShowcase
            friend={selectedFriend}
            onClose={() => setSelectedFriend(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
