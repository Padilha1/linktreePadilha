type CardProps = {
  name: string;
  url: string;
};

export function Card({ name, url }: CardProps) {
  const isDownloadable = (link: string) => {
    return /\.(pdf|zip|docx?|xlsx?|png|jpg|jpeg)$/i.test(link);
  };

  return (
    <div className="bg-bg-light dark:bg-bg-dark bg-cover mb-3 w-80 py-4 rounded items-center justify-center text-center">
      {isDownloadable(url) ? (
        <a
          href={url}
          download
          className="inline-block text-center hover:font-semibold  hover:scale-105 duration-100"
        >
          <span>📥 {name}</span>
        </a>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-center hover:font-semibold hover:scale-105 duration-100"
        >
          <span>🔗 {name}</span>
        </a>
      )}
    </div>
  );
}
