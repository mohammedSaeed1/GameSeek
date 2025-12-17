import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLogoWithName from "./MainLogoWithName";

export default function GameDetails() {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);

  function getGameDetails(id) {
    axios
      .get(`https://corsproxy.io/?https://www.freetogame.com/api/game?id=${id}`)
      .then((response) => {
        setGameDetails(response.data);
      });
  }

  useEffect(() => {
    getGameDetails(id);
  }, [id]);

  return (
    <>
      <section className="sm:w-[85%] mx-auto py-10">
          <MainLogoWithName/>
        <h1 className="text-[#50A2FF] text-3xl font-extrabold text-center my-10">
          Game Details
        </h1>
        {/* Main Game Info */}
        <div className="sm:flex items-start justify-between gap-7 mb-10">
          <div className="img w-full sm:w-1/3">
            <img
              src={gameDetails?.thumbnail}
              alt={gameDetails?.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="details w-2/3 text-white mx-auto">
            <h2 className="text-4xl font-bold mb-4 mt-1 sm:mt-0">
              {gameDetails?.title}
            </h2>

            <div className="flex gap-3 mb-4">
              <span className="bg-blue-600 rounded-md px-3 py-1 text-sm font-semibold">
                {gameDetails?.genre}
              </span>
              <span className="bg-green-600 rounded-md px-3 py-1 text-sm font-semibold">
                {gameDetails?.platform}
              </span>
              <span className="bg-purple-600 rounded-md px-3 py-1 text-sm font-semibold">
                {gameDetails?.status}
              </span>
            </div>

            <div className="text-sm">
              <div className="bg-[#1a1a2e] p-3 rounded-lg my-2">
                <span className="text-gray-400">Publisher:</span>
                <p className="font-semibold">{gameDetails?.publisher}</p>
              </div>
              <div className="bg-[#1a1a2e] p-3 rounded-lg my-2">
                <span className="text-gray-400">Developer:</span>
                <p className="font-semibold">{gameDetails?.developer}</p>
              </div>
              <div className="bg-[#1a1a2e] p-3 rounded-lg my-2">
                <span className="text-gray-400">Release Date:</span>
                <p className="font-semibold">{gameDetails?.release_date}</p>
              </div>
              <div className="bg-[#1a1a2e] p-3 rounded-lg my-2">
                <span className="text-gray-400">Status:</span>
                <p className="font-semibold">{gameDetails?.status}</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-5">
              {gameDetails?.description}
            </p>

            <a
              href={gameDetails?.game_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Play Now Free
            </a>
          </div>
        </div>

        {/* System Requirements */}
        {gameDetails?.minimum_system_requirements && (
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 rounded-lg shadow-xl border border-[#333]">
            <h3 className="text-white text-3xl font-bold mb-6 flex items-center gap-3">
              <svg
                className="w-8 h-8 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Minimum System Requirements
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* OS */}
              <div className="bg-[#0f0f1e] p-5 rounded-lg border border-[#2a2a3e] hover:border-blue-500 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-400 text-sm font-semibold uppercase">
                    Operating System
                  </h4>
                </div>
                <p className="text-white text-lg font-semibold">
                  {gameDetails?.minimum_system_requirements?.os}
                </p>
              </div>

              {/* Processor */}
              <div className="bg-[#0f0f1e] p-5 rounded-lg border border-[#2a2a3e] hover:border-green-500 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-600 p-2 rounded-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-400 text-sm font-semibold uppercase">
                    Processor
                  </h4>
                </div>
                <p className="text-white text-lg font-semibold">
                  {gameDetails?.minimum_system_requirements?.processor}
                </p>
              </div>

              {/* Memory */}
              <div className="bg-[#0f0f1e] p-5 rounded-lg border border-[#2a2a3e] hover:border-purple-500 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-600 p-2 rounded-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-400 text-sm font-semibold uppercase">
                    Memory (RAM)
                  </h4>
                </div>
                <p className="text-white text-lg font-semibold">
                  {gameDetails?.minimum_system_requirements?.memory}
                </p>
              </div>

              {/* Graphics */}
              <div className="bg-[#0f0f1e] p-5 rounded-lg border border-[#2a2a3e] hover:border-red-500 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-600 p-2 rounded-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-400 text-sm font-semibold uppercase">
                    Graphics Card
                  </h4>
                </div>
                <p className="text-white text-lg font-semibold">
                  {gameDetails?.minimum_system_requirements?.graphics}
                </p>
              </div>

              {/* Storage */}
              <div className="bg-[#0f0f1e] p-5 rounded-lg border border-[#2a2a3e] hover:border-yellow-500 transition-all md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-yellow-600 p-2 rounded-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </div>
                  <h4 className="text-gray-400 text-sm font-semibold uppercase">
                    Storage Space
                  </h4>
                </div>
                <p className="text-white text-lg font-semibold">
                  {gameDetails?.minimum_system_requirements?.storage}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Screenshots */}
        {gameDetails?.screenshots && gameDetails?.screenshots.length > 0 && (
          <div className="mt-10 text-center ">
            <h3 className="text-white text-3xl font-bold mb-6">Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {gameDetails?.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot.image}
                  alt={`Screenshot ${index + 1}`}
                  className="w-[90%] m-auto text-center sm:w-full rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
