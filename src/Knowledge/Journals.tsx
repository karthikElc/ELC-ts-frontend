import { FC, useEffect, useState } from "react";

interface JournalData {
  id: number;
  title: string;
  description: string;
  source: string;
  date: string;
}

const Journals: FC = () => {
  const [data, setData] = useState<JournalData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJournals = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("/api/content?type=journals");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError("Failed to fetch journal data");
      } finally {
        setLoading(false);
      }
    };

    fetchJournals();
  }, []);

  if (loading) return <p>Loading Journals...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="p-4 my-2 border border-gray-300">
          <h3 className="font-bold">{item.title}</h3>
          <p>{item.description}</p>
          <a
            href={item.source}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
          <p className="text-gray-500">{new Date(item.date).toDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default Journals;
