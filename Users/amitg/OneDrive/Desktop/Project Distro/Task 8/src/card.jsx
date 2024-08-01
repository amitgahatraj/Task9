function Card() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            WHAT'S TRENDING NOW
          </p>
          <h2 className=" m-5 text-base text-gray-600 font-semibold tracking-wide uppercase">
            Latest Fight News
          </h2>
        </div>

        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card shadow-lg p-4 bg-white border">
            <h2 className="card-title">Fight 1</h2>
            <p>A vs B</p>
          </div>
          <div className="card shadow-lg p-4 bg-white border">
            <h2 className="card-title">Fight 2</h2>
            <p>C vs D</p>
          </div>
          <div className="card shadow-lg p-4 bg-white border">
            <h2 className="card-title">Fight 3</h2>
            <p>E vs F</p>
          </div>
          <div className="card shadow-lg p-4 bg-white border">
            <h2 className="card-title">Fight 1</h2>
            <p>G vs H</p>
          </div>
          <div className="card shadow-lg p-4 bg-white border">
            <h2 className="card-title">Fight 2</h2>
            <p>I vs J</p>
          </div>
          <div className="card shadow-lg p-4 bg-white border">
            <h2 className="card-title">Fight 3</h2>
            <p>K vs L</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
