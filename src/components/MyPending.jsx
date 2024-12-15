import React, { useState, useEffect } from 'react';
import { approveQuestion } from '../services/qna.api';
import { APPROVE_QUESTION } from '../services/apis';

const MyPending = () => {
  const token = localStorage.getItem('token');
  const payload = JSON.parse(atob(token.split(".")[1]));
  const admin = payload.roleType === "admin";
  const { userId } = payload; 

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const response = await fetch('http://localhost:4000/api/v1/qna/pendingQuestions', {
          method: 'GET',
          credentials: 'include', // Include cookies
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result.data); // Update state with fetched data
        console.log(result, "Fetched data");
      } catch (err) {
        setError(err.message); // Update state with error message
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchData();
  }, []);

  const approveHandler = (uid) => {
    console.log(`Approving question with ID: ${uid}`);
    // Add approve logic here
  };

  const deleteHandler = () => {
    console.log('Deleting question...');
    // Add delete logic here
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="flex flex-col m-10">
        {data?.map((value, index) => (
          <div key={value.id} className="my-5 border-b-2 py-5">
            <div className="text-2xl cursor-pointer hover:underline">
              Q{index + 1}. {value.questionTitle}
            </div>
            <div className="flex my-2">
              {value?.tags?.map((tt, idx) => (
                <div key={idx} className="px-2 text-gray-600">{tt}</div>
              ))}
            </div>
            {admin && (
              <div className="flex">
                <button
                  className="text-green-600 mt-2 hover:underline px-8"
                  onClick={() => approveQuestion("POST", APPROVE_QUESTION,  {
                    questionId: value._id,
                    status: "approved",
                  })}
                >
                  Approve
                </button>
                <button
                  className="text-red-600 mt-2 hover:underline px-8"
                  onClick={() => approveQuestion("POST", APPROVE_QUESTION, {
                    questionId: value._id,
                    status: "rejected",
                  })}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPending;
