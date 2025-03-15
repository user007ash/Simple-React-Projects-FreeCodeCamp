// GitHub User Search

import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('')
  const [githubUrl, setGithubUrl] = useState('')
  const [notFound, setNotFound] = useState(false)

  const getUser = async (e) => {
    e.preventDefault()
    setShowCard(false)
    setNotFound(false)
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error(`Http Error:${res.status}`);
      }
      const data = await res.json();
      console.log(data)
      setAvatarUrl(data.avatar_url)
      setGithubUrl(data.html_url)
      setShowCard(true)
    } catch (error) {
      console.error('Error while fetching:',error);
      setNotFound(true)
    }
  };

  return (
    <>
      <div className="min-h-screen bg-neutral-600 flex flex-col items-center">
        <div className="m-8 space-y-12 flex flex-col items-center">
          <h1 className="md:text-6xl text-5xl font-bold text-neutral-900 ">
            Git Profile Checker
          </h1>
          <form onSubmit={getUser}>
            <input
              type="text"
              placeholder="Github Username"
              className="bg-neutral-300 px-6 py-4 rounded-l-2xl md:text-2xl outline-none"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <button className="bg-neutral-300 px-6 py-4 rounded-r-2xl border-l-2 border-neutral-700 font-semibold hover:bg-neutral-800 hover:text-neutral-50 md:text-2xl">
              Submit
            </button>
          </form>
        </div>
        {showCard && <Card username={username} githubUrl={githubUrl} avatarUrl = {avatarUrl}/>}
        {notFound && <div className="text-5xl font-semibold text-red-400">User Not Found </div>}
      </div>
    </>
  );
}

export default App;
