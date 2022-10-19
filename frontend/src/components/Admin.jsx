import React from "react";
import "./AdminStyles.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [rq, setRq] = useState([]);

  useEffect(() => {
    axios
      .get(`https://intoglo-first-api.herokuapp.com/requestquote/getall`)
      .then(({ data }) => {
        setRq(data);
      });
  }, []);

  const handleChange = (e) => {
    const formdata = {
      email: e.target.vale,
    };
    axios
      .get(
        `https://intoglo-first-api.herokuapp.com/requestquote/getone`,
        formdata
      )
      .then(({ data }) => {
        setRq(data);
      });
  };
  return (
    <>
      <div className="header">
        <div className="header1">
          <img
            src="https://ik.imagekit.io/qtf62wap9/es/static/u/intoglo.com/images/logo/original/intoglo_logo.png?tr=w-150"
            alt="intoglo_logo"
          />
          <div className="searchform">
            <form>
              <input
                type="text"
                placeholder="Email...."
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="body1">
          <div className="sidebar">
            <aside class="w-64" aria-label="Sidebar">
              <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul class="space-y-2">
                  <li>
                    <a
                      href="temp"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                      </svg>
                      <span class="ml-3">Dashboard</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="temp"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                      <span class="flex-1 ml-3 whitespace-nowrap">
                        Request Quote
                      </span>
                      <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="temp"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                      </svg>
                      <span class="flex-1 ml-3 whitespace-nowrap">
                        Total quotes
                      </span>
                      <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                        {rq.length}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="temp"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="temp"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="flex-1 ml-3 whitespace-nowrap">
                        Products
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="temp"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="temp"
                      class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <svg
                        aria-hidden="true"
                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
            <div className="searchfil">
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                SEA
              </button>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                AIR
              </button>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                FCL
              </button>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                LCL
              </button>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                SEA + LCL
              </button>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                SEA + FCL
              </button>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                SC
              </button>
            </div>
          </div>
          <div></div>
          <div className="data">
            <div></div>
            {rq &&
              rq.map((e) => {
                return (
                  <>
                    <div className="singlerq">
                      <div className="singlerq1">
                        <div className="signlerq2">
                          <h1>Request_quote_id: {e.id}</h1>
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                          >
                            Delete
                          </button>
                        </div>

                        <div className="product">
                          <h1>Product details : </h1>
                          Name : {e.product_details.name} <br></br>
                          Discription : {e.product_details.discription}{" "}
                          <br></br>
                          HS Code : {e.product_details.hscode} <br></br>
                          Category : {e.product_details.category}{" "}
                          &nbsp;&nbsp;&nbsp;&nbsp; Level :{" "}
                          {e.product_details.level}
                        </div>

                        <div className="product2">
                          <div className="cargo">
                            <h1>Cargo details : </h1>
                            delivery mode : {e.delivery_mode} <br></br>
                            Transportaion : {e.transportation_by} <br></br>
                            Container type : {e.container_type} <br></br>
                            Weight : {e.weight}mt <br></br>
                            Volume : {e.volume}m3 <br></br>
                            Location From : {e.location_from}
                            <br></br>
                            Location To: {e.location_to}
                            <br></br>
                            Ready to load : {e.ready_to_load}
                            <br></br>
                            Associated services : {e.associated_services}
                            <br></br>
                            Dimentions :{" "}
                            {e.by_units ? (
                              <div className="dimentions">
                                {e.dimensions.map((c) => {
                                  return (
                                    <>
                                      <div>
                                        <p>Width : {c.width}</p>
                                        <p>Height : {c.height}</p>
                                        <p>Length : {c.length}</p>
                                        <p>Quantity : {c.quantity}</p>
                                        <p>Gross Weight : {c.gross_weight}</p>
                                      </div>
                                    </>
                                  );
                                })}
                              </div>
                            ) : (
                              "N/A"
                            )}
                          </div>

                          <div className="contact">
                            <h1>Contact details : </h1>
                            First_Name : {e.first_name}
                            <br></br>
                            Last_Name : {e.last_name}
                            <br></br>
                            Email : {e.email} <br></br>
                            Phone : {e.phone}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
