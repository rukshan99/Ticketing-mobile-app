import React, { Component } from 'react';
import { useState, useEffect, useMemo, useRef } from "react";
import { Button, View, Text, Alert } from 'react-native';
import { useTable } from "react-table";
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const BusList = (props) => {
    const [trips, setTrips] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const tripsRef = useRef();
  
    tripsRef.current = trips;
  
    useEffect(() => {
      retrieveTrips();
    }, []);
  
    const onChangeSearchTitle = (e) => {
      const searchTitle = e.target.value;
      setSearchTitle(searchTitle);
    };
  
    const retrieveTrips = async() => {
        try {
			const res = await axios.get(`http://localhost:4000/api/v1/buses/`);
            console.log(res.data.data)
            setTrips(res.data.data);
		
		} catch (error) {

			console.log(error);
			alert('something went wrong, please try again later');
		}
    };
  
    const refreshList = () => {
        retrieveTrips();
    };
  
    // const removeAllTutorials = () => {
    //   TutorialDataService.removeAll()
    //     .then((response) => {
    //       console.log(response.data);
    //       refreshList();
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // };
  
    const findByTitle = async() => {
      if (searchTitle === ''){
      alert('Please insert something')
      refreshList();
      }
      else{
      try {
        const res = await axios.get(`http://localhost:4000/api/v1/buses/search/${searchTitle}`);
        console.log(res)
        if (res.data.buses.length < 1) {
          return alert('Buses Not Found!');
        }
   
        setTrips(res.data.buses);
      } catch (error) {
        alert(error.response.data.error);
      }
    }
    };
  
    const openTutorial = (rowIndex) => {
      const id = tripsRef.current[rowIndex]._id;
      console.log(id)
     
      // props.history.push("/tutorials/" + id);
    };
  
    const deleteTutorial = async (rowIndex) => {
      const id = tripsRef.current[rowIndex]._id;
      if (window.confirm(`Do You want to delete a Bus with ID ${tripsRef.current[rowIndex].busID} ?`)) {
      try {
				await axios.delete(`http://localhost:4000/api/v1/buses/delete/${id}`);
			
        // let newBuses = [...tripsRef.current];
        // newBuses.splice(rowIndex, 1);

        // setTrips(newBuses);
        refreshList();
			} catch (error) {
				alert(error.response.data.error);
			}
    }
      
    };
  
    const columns = useMemo(
      () => [
        {
          Header: "Bus ID",
          accessor: "busID",
        },
        {
          Header: "Date",
          accessor: "date",
        },
        {
            Header: "Time",
            accessor: "time",
        },
        {
            Header: "Route",
            accessor: "route",
        },
        {
            Header: "Bus No",
            accessor: "BusNo",
          },
          {
            Header: "Actions",
            accessor: "actions",
            Cell: (props) => {
              // console.log(props.row.original._id)
              const rowIdx = props.row.id;
              return (
                <div>
                  <span onClick={() => openTutorial(rowIdx)}>
                    <FaEdit size={22} color="black"/>
                  </span> &nbsp;
    
                  <span onClick={() => deleteTutorial(rowIdx)}>
                  <MdDelete size={22} color="red"/>
                  </span>
                </div>
              );
            },
          },
        ],
        []
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data: trips,
    });
  
    return (
        <React.Fragment>
            <br/> <br/> <br/>
           <div className="mobile container">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <div className="list row">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Route"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
            <div className="input-group-append ">
              <button
                className="btn btn btn-success"
                type="button"
                onClick={findByTitle}
              >
                Search
              </button>
             
            </div>
          </div>
        </div>
        

        <div className="col-md-12 list">
        <div class="table-responsive-sm">
        <table className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
        
      </div>

      </div>
      </div>
      </React.Fragment>
    );

    
  };

  
  export default BusList;