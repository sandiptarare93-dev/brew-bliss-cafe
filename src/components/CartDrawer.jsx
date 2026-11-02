import React, { useState } from 'react';
import { 
  ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, 
  Sparkles, Tag, CheckCircle2, AlertCircle, Coffee, Check 
} from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  appliedPromo,
  onApplyPromo,
  onRemovePromo,
}) {
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState('dine-in'); // 'dine-in' or 'takeaway'
  const [tableNumber, setTableNumber] = useState('Table 7');
  const [orderConfirmed, setOrderConfirmed] = useState(null);

  if (!isOpen) return null;

  // Calculation
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Discount calculation
  let discountAmount = 0;
  if (appliedPromo) {
    if (appliedPromo.code === 'BOGOBLISS') {
      discountAmount = Math.min(180, subtotal > 180 ? 180 : 0);
    } else if (appliedPromo.code === 'STUDENT20') {
      discountAmount = Math.round(subtotal * 0.20);
    } else if (appliedPromo.code === 'WELCOME10') {
      discountAmount = Math.round(subtotal * 0.10);
    } else if (appliedPromo.code === 'WEEKENDCOMBO') {
      discountAmount = 70;
    } else if (appliedPromo.code === 'SWEETDUO') {
      discountAmount = 100;
    }
  }

  const discountedSubtotal = Math.max(0, subtotal - discountAmount);
  const gstTax = Math.round(discountedSubtotal * 0.05); // 5% GST
  const grandTotal = discountedSubtotal + (subtotal > 0 ? gstTax : 0);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    const code = promoInput.trim().toUpperCase();
    if (!code) return;

    const validCodes = {
      'BOGOBLISS': { code: 'BOGOBLISS', desc: 'Buy 1 Get 1 Free Hot Coffee (Save up to ₹180)' },
      'STUDENT20': { code: 'STUDENT20', desc: '20% Student Special Discount' },
      'WELCOME10': { code: 'WELCOME10', desc: '10% Welcome Newsletter Discount' },
      'WEEKENDCOMBO': { code: 'WEEKENDCOMBO', desc: '₹70 Combo Savings' },
      'SWEETDUO': { code: 'SWEETDUO', desc: '₹100 Dessert Duo Pairing' }
    };

    if (validCodes[code]) {
      onApplyPromo(validCodes[code]);
      setPromoInput('');
    } else {
      setPromoError('Invalid demo code. Try STUDENT20, BOGOBLISS, or WELCOME10.');
    }
  };

  const handlePlaceDemoOrder = (e) => {
    e.preventDefault();
    if (!customerName.trim()) {
      alert('Please enter your name for the demo order pickup call!');
      return;
    }

    const orderReceipt = {
      orderId: `BLISS-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      items: [...cart],
      orderType,
      tableNumber: orderType === 'dine-in' ? tableNumber : 'Takeaway Counter',
      customerName,
      subtotal,
      discountAmount,
      promoCode: appliedPromo?.code,
      gstTax,
      grandTotal,
    };

    setOrderConfirmed(orderReceipt);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      
      {/* Slide Drawer Panel */}
      <div className="w-full max-w-md bg-[#FDFBF7] h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E8D8C8] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#F5EBE1] flex items-center justify-center text-[#7B4420]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-[#2C170A]">
                Your Order Tray
              </h3>
              <p className="text-xs text-[#94582E]">
                {cart.length} {cart.length === 1 ? 'item' : 'items'} in demo cart
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 rounded-lg text-[#603316] hover:bg-[#F5EBE1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body: Cart Items List or Empty State */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          
          {/* Demo disclaimer notice */}
          <div className="bg-[#FAF6EE] border border-[#D7BEA8] p-3 rounded-xl flex items-start gap-2.5 text-xs text-[#603316]">
            <Sparkles className="w-4 h-4 text-[#94582E] shrink-0 mt-0.5" />
            <p>
              <strong>Academic Demo Cart:</strong> Simulated ordering for presentation purposes. No payment gateway is attached and no charges will occur.
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 bg-[#F5EBE1] rounded-full flex items-center justify-center mx-auto text-[#B88658]">
                <Coffee className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#2C170A]">Your tray is empty</h4>
              <p className="text-xs text-[#603316] max-w-xs mx-auto">
                Explore our digital menu to add handcrafted coffees, artisan sandwiches, and gourmet desserts.
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7B4420] text-white text-xs font-semibold rounded-xl hover:bg-[#603316] transition-colors"
              >
                Browse Menu Items
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-3.5 rounded-xl border border-[#E8D8C8] shadow-sm flex items-center gap-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover bg-[#F5EBE1] shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif font-bold text-sm text-[#2C170A] truncate">
                      {item.name}
                    </h5>
                    <p className="text-xs text-[#94582E] font-medium mt-0.5">
                      ₹{item.price} each
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#D7BEA8] rounded-lg bg-[#FAF6EE]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="p-1 hover:bg-[#E8D8C8] text-[#7B4420] rounded-l-lg transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#2C170A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="p-1 hover:bg-[#E8D8C8] text-[#7B4420] rounded-r-lg transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        aria-label="Remove item"
                        className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1 ml-auto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-serif font-bold text-sm text-[#2C170A]">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Promo Code Input Box */}
          {cart.length > 0 && (
            <div className="pt-2">
              {appliedPromo ? (
                <div className="bg-emerald-50 border border-emerald-300 p-3 rounded-xl flex items-center justify-between text-xs text-emerald-900">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="font-bold">Code applied: {appliedPromo.code}</span>
                      <p className="text-[11px] text-emerald-700">{appliedPromo.desc}</p>
                    </div>
                  </div>
                  <button
                    onClick={onRemovePromo}
                    className="text-xs text-rose-600 hover:underline font-semibold ml-2"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="space-y-1.5">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B88658]" />
                      <input
                        type="text"
                        placeholder="Promo Code (e.g. STUDENT20)"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#D7BEA8] bg-white text-[#2C170A] uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#94582E]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#7B4420] text-white rounded-xl text-xs font-semibold hover:bg-[#603316] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-[11px] text-rose-600 font-medium pl-1">{promoError}</p>
                  )}
                  <div className="flex items-center gap-1.5 text-[11px] text-[#94582E] pl-1">
                    <span>Try:</span>
                    <button
                      type="button"
                      onClick={() => setPromoInput('STUDENT20')}
                      className="underline font-semibold"
                    >
                      STUDENT20
                    </button>
                    <span>•</span>
                    <button
                      type="button"
                      onClick={() => setPromoInput('BOGOBLISS')}
                      className="underline font-semibold"
                    >
                      BOGOBLISS
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Drawer Footer & Checkout Trigger */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#E8D8C8] bg-white space-y-3">
            <div className="space-y-1.5 text-xs text-[#603316]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Demo Promo Discount</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Simulated GST (5%)</span>
                <span>₹{gstTax}</span>
              </div>
              <div className="border-t border-[#E8D8C8] pt-2 flex justify-between text-base font-bold text-[#2C170A]">
                <span className="font-serif">Total (Demo)</span>
                <span className="font-serif text-lg text-[#7B4420]">₹{grandTotal}</span>
              </div>
            </div>

            <button
              onClick={() => setShowCheckoutModal(true)}
              className="w-full py-3.5 bg-[#7B4420] text-white rounded-xl font-semibold text-sm hover:bg-[#603316] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
            >
              <span>Proceed to Demo Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Checkout Modal Simulation */}
      {showCheckoutModal && (
        <div className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FDFBF7] rounded-3xl max-w-md w-full p-6 sm:p-8 border border-[#E8D8C8] shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setShowCheckoutModal(false)}
              className="absolute top-4 right-4 p-2 text-[#603316] hover:bg-[#F5EBE1] rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            {orderConfirmed ? (
              /* Receipt Screen */
              <div className="text-center space-y-4 py-2">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#2C170A]">
                  Order Placed Successfully!
                </h4>
                <div className="bg-[#FAF6EE] p-4 rounded-2xl border border-[#D7BEA8] text-left text-xs space-y-2">
                  <div className="flex justify-between font-bold text-[#7B4420] border-b border-[#E8D8C8] pb-1.5">
                    <span>Receipt #{orderConfirmed.orderId}</span>
                    <span>{orderConfirmed.timestamp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#603316]">Guest Name:</span>
                    <span className="font-semibold text-[#2C170A]">{orderConfirmed.customerName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#603316]">Order Type:</span>
                    <span className="font-semibold text-[#2C170A] uppercase">{orderConfirmed.orderType} ({orderConfirmed.tableNumber})</span>
                  </div>
                  <div className="pt-2 border-t border-[#E8D8C8]">
                    <span className="font-bold text-[#603316]">Items Ordered:</span>
                    <ul className="mt-1 space-y-1">
                      {orderConfirmed.items.map((i) => (
                        <li key={i.id} className="flex justify-between text-[#2C170A]">
                          <span>{i.quantity}x {i.name}</span>
                          <span>₹{i.price * i.quantity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-[#E8D8C8] flex justify-between font-bold text-sm text-[#7B4420]">
                    <span>Total Amount (Simulated):</span>
                    <span>₹{orderConfirmed.grandTotal}</span>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-[11px] text-amber-900 text-left">
                  <span className="font-bold">Project Notice:</span> This is a student simulation demo. No real monetary transactions or deliveries are made.
                </div>

                <button
                  onClick={() => {
                    setOrderConfirmed(null);
                    setShowCheckoutModal(false);
                    onClose();
                  }}
                  className="w-full py-3 bg-[#7B4420] text-white rounded-xl font-semibold text-sm hover:bg-[#603316]"
                >
                  Back to Café
                </button>
              </div>
            ) : (
              /* Checkout Form */
              <form onSubmit={handlePlaceDemoOrder} className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Coffee className="w-5 h-5 text-[#94582E]" />
                  <h4 className="font-serif text-xl font-bold text-[#2C170A]">
                    Complete Demo Order
                  </h4>
                </div>

                <p className="text-xs text-[#603316]">
                  Enter sample guest details to test the order transmission workflow for this digital marketing prototype.
                </p>

                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-[#2C170A] mb-1">
                    Your Name / Pickup Callname *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Sharma"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D7BEA8] bg-[#FAF6EE] text-sm focus:outline-none focus:ring-2 focus:ring-[#94582E]"
                  />
                </div>

                {/* Dine-In vs Takeaway */}
                <div>
                  <label className="block text-xs font-bold text-[#2C170A] mb-1">
                    Dining Preference
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                        orderType === 'dine-in'
                          ? 'bg-[#7B4420] text-white border-[#7B4420]'
                          : 'bg-[#FAF6EE] text-[#603316] border-[#D7BEA8]'
                      }`}
                    >
                      Dine-in at Café
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                        orderType === 'takeaway'
                          ? 'bg-[#7B4420] text-white border-[#7B4420]'
                          : 'bg-[#FAF6EE] text-[#603316] border-[#D7BEA8]'
                      }`}
                    >
                      Quick Takeaway
                    </button>
                  </div>
                </div>

                {orderType === 'dine-in' && (
                  <div>
                    <label className="block text-xs font-bold text-[#2C170A] mb-1">
                      Table / Booth Selection (Demo)
                    </label>
                    <select
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D7BEA8] bg-[#FAF6EE] text-sm focus:outline-none focus:ring-2 focus:ring-[#94582E]"
                    >
                      <option value="Table 1 (Window Garden View)">Table 1 (Window Garden View)</option>
                      <option value="Table 4 (Quiet Study Corner)">Table 4 (Quiet Study Corner)</option>
                      <option value="Table 7 (Center Velvet Booth)">Table 7 (Center Velvet Booth)</option>
                      <option value="Table 12 (High Bar Stool)">Table 12 (High Bar Stool)</option>
                    </select>
                  </div>
                )}

                {/* Payment Simulation Note */}
                <div className="bg-[#FAF6EE] p-3.5 rounded-xl border border-[#D7BEA8] text-xs text-[#603316] space-y-1">
                  <div className="flex justify-between font-bold text-[#2C170A]">
                    <span>Total Demo Payable:</span>
                    <span className="text-[#7B4420]">₹{grandTotal}</span>
                  </div>
                  <p className="text-[11px] text-[#94582E]">
                    ✓ Zero real payment gateway required. No credit card information collected.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#7B4420] text-white rounded-xl font-bold text-sm hover:bg-[#603316] transition-all shadow-md active:scale-95"
                >
                  Place Simulated Demo Order
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
