import React, { Component } from 'react';
import { useState, useEffect, useMemo, useRef } from "react";
import { Button, View, Text, Alert, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useTable } from "react-table";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const BusList = (props) => {
    const navigation = useNavigation();
    const [trips, setTrips] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const tripsRef = useRef();
  
    tripsRef.current = trips;

    const [driversCollection, setdriversCollection] = useState([]);
    const [conductorCollection, setconductorCollection] = useState([]);
    const [inspectorCollection, setinspectorCollection] = useState([]);
    const [driver,setdriver ] = useState("");
    const [conductor,setconductor ] = useState("");
    const [inspector,setinspector ] = useState("");
  
  
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
            const res1 = await axios.get('http://localhost:4000/api/v1/user/allDrivers')
            const res2 = await axios.get('http://localhost:4000/api/v1/user/allConductors')
            const res3 = await axios.get('http://localhost:4000/api/v1/user/allInspectors')

            console.log(res.data.data)
            setTrips(res.data.data);
            setdriversCollection(res1.data.data);
            setconductorCollection(res2.data.data);
            setinspectorCollection(res3.data.data);
		
		} catch (error) {

			console.log(error);
			alert('something went wrong, please try again later');
		}
    };

    const refreshList = () => {
        retrieveTrips();
    };
    
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
          alert('Buses Not Found!');
          refreshList();
        }
   
        setTrips(res.data.buses);
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
  
    const styles = StyleSheet.create({
 
        container :{
            flex:1,
            margin: 10,
        },
         
        TextInputStyleClass: {
            marginBottom: 7,
            height: 40,
            borderWidth: 1,
            borderColor: '#2196F3',
            borderRadius: 5 
        }
         
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
   
      <View  style={styles.container}>
                <Text> Drivers </Text>    
                <Picker
                    selectedValue= {driver}
                    style={styles.TextInputStyleClass}
                    onValueChange={(itemValue, itemIndex) =>setdriver(itemValue)}
                    

                >
                    {driversCollection.map((item, key)=>(
                        <Picker.Item label={item.name} value={item.name} key={key} />)
                    )}
                
                </Picker>

                <Text> Conductors </Text>    
                <Picker
                    selectedValue= {conductor}
                    style={styles.TextInputStyleClass}
                    onValueChange={(itemValue, itemIndex) =>setconductor(itemValue)}
                    

                >
                    {conductorCollection.map((item, key)=>(
                        <Picker.Item label={item.name} value={item.name} key={key} />)
                    )}
                
                </Picker>

                <Text> Inspectors </Text>    
                <Picker
                    selectedValue= {inspector}
                    style={styles.TextInputStyleClass}
                    onValueChange={(itemValue, itemIndex)=>setinspector(itemValue)}
                    

                >
                    {inspectorCollection.map((item, key)=>(
                        <Picker.Item label={item.name} value={item.name} key={key} />)
                    )}
                
                </Picker>
                
                <br/>
                <Button title="Notify"
                        onPress={() => this.submit()}
                />
                <br/>
                 <Button title="Cancel" color="red"
                />

            </View>
      </React.Fragment>
    );

    
  };

  
  export default BusList;

  