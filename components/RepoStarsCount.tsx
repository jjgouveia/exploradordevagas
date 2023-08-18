import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchStars } from "../utils/fetchRepoStars";

type Props = {
  user: String;
  repo: String;
};

export default function RepoStarsCount({ user, repo }: Props) {
  const [stars, setStars] = useState(0);

  const fetchStarsCount = async (user: String, repo: String) => {
    let query = new fetchStars(user, repo);
    let response = await query.getStars();
    return response;
  };

  useEffect(() => {
    fetchStarsCount(user, repo).then((response) => setStars(response));
  }, []);

  return (
    <div>
      <Link href={`https://github.com/${user}/${repo}`} title="Stars on GitHub">
        <div id="raiz" className="flex sm:pb-0 b">
          <div className="w-auto h-5" id="star-container">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="ml-1 h-5 w-5 fill-slate-500 group-hover:fill-slate-"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: "drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.9))",
              }}
            >
              <path
                d="M18.4834 16.7674C17.8471 16.9195 17.1829 17 16.5 17C11.8056 17 8 13.1944 8 8.50001C8 8.01653 8.04036 7.54249 8.11791 7.08105C8.08172 7.11586 8.04432 7.14792 8.00494 7.17781C7.72433 7.39083 7.37485 7.46991 6.67589 7.62806L6.03954 7.77204C3.57986 8.32856 2.35002 8.60682 2.05742 9.54774C1.76482 10.4887 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19042 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62117 22.3417 7.77267 21.8116 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0249 12 20.0249C12.3469 20.0249 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8116 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544L18.4834 16.7674Z"
                fill="#ffff1a"
              />
              <path
                opacity="0.6"
                d="M9.15302 5.40838L8.82532 5.99623C8.46538 6.64194 8.28541 6.96479 8.0048 7.17781C8.04418 7.14791 8.08158 7.11586 8.11777 7.08105C8.04022 7.54249 7.99986 8.01653 7.99986 8.50001C7.99986 13.1944 11.8054 17 16.4999 17C17.1828 17 17.8469 16.9195 18.4833 16.7674L18.4649 16.5776C18.3928 15.8341 18.3568 15.4624 18.464 15.1177C18.5712 14.773 18.8094 14.4944 19.2859 13.9372L19.7198 13.4299C21.3966 11.4691 22.235 10.4886 21.9424 9.54773C21.6498 8.60682 20.42 8.32856 17.9603 7.77203L17.324 7.62805C16.625 7.4699 16.2755 7.39083 15.9949 7.17781C15.7143 6.96479 15.5343 6.64194 15.1744 5.99624L14.8467 5.40837C13.58 3.13612 12.9467 2 11.9999 2C11.053 2 10.4197 3.13613 9.15302 5.40838Z"
                fill="#ffff1a"
              />
            </svg>
            <div className="flex ml-1 mr-1 mt-1 font-medium">
              <span>Stars:</span>
              <p className="font-semibold" id="h2">
                {stars}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
