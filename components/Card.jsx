function Card({ title, children, footer }) {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 max-w-md mx-auto">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      <div className="text-gray-800 dark:text-white">{children}</div>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  );
}

export default Card;
