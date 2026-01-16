export default function Glow() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute left--120px top-24 rounded-full blur-3xl"
        style={{
          width: 420,
          height: 420,
          background:
            "radial-gradient(circle, rgba(47,125,255,0.22), transparent 65%)",
        }}
      />

      <div
        className="absolute right--160px top-16 rounded-full blur-3xl"
        style={{
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(123,92,255,0.2), transparent 65%)",
        }}
      />

      <div
        className="absolute left-1/2 rounded-full blur-3xl"
        style={{
          top: 560,
          width: 520,
          height: 520,
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(32,211,194,0.18), transparent 65%)",
        }}
      />
    </div>
  );
}
