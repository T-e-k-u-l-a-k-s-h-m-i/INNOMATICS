import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { deleteStudent } from '../features/students/studentSlice'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate 

const StudentList = () => {     
    const dispatch = useDispatch();     
    const navigate = useNavigate(); // Initialize navigate     
    const students = useSelector((state) => state.students.list);        

    const [searchTerm, setSearchTerm] = useState('');     
    const [selectedClass, setSelectedClass] = useState('');     
    const [sortOrder, setSortOrder] = useState('name'); // Default sort by name        

    // Example classes to filter by     
    const classes = ['10th Grade', '11th Grade', '12th Grade'];        

    const filteredStudents = students       
        .filter(student => {         
            const nameMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase());         
            const classMatch = selectedClass ? student.class === selectedClass : true;         
            return nameMatch && classMatch;       
        })       
        .sort((a, b) => {         
            if (sortOrder === 'name') {           
                return a.name.localeCompare(b.name);         
            } else {           
                return a.class.localeCompare(b.class);         
            }       
        });        

    const handleDelete = (id) => {       
        if (window.confirm("Are you sure you want to delete this student?")) {         
            dispatch(deleteStudent(id));       
        }     
    };        

    return (       
        <div style={{ padding: '0 20px' }}> {/* Added left and right padding */}                  
            <input           
                type="text"           
                placeholder="Search by name"           
                value={searchTerm}           
                onChange={(e) => setSearchTerm(e.target.value)}         
                style={{ marginBottom: '10px', padding: '8px', width: '100%' }} // Padding for input           
            />            

            <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} 
                    style={{ marginBottom: '10px', padding: '8px', width: '100%' }}> {/* Padding for select */}
                <option value="">All Classes</option>           
                {classes.map((className) => (             
                    <option key={className} value={className}>{className}</option>           
                ))}         
            </select>            

            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} 
                    style={{ marginBottom: '10px', padding: '8px', width: '100%' }}> {/* Padding for sort */}
                <option value="name">Sort by Name</option>           
                <option value="class">Sort by Class</option>         
            </select>            

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>           
                <thead>             
                    <tr>               
                        <th>Name</th>               
                        <th>Email</th>               
                        <th>Class</th>               
                        <th>Actions</th>             
                    </tr>           
                </thead>           
                <tbody>             
                    {filteredStudents.map((student) => (               
                        <tr key={student.id}>                 
                            <td>{student.name}</td>                 
                            <td>{student.email}</td>                 
                            <td>{student.class}</td>                 
                            <td>                   
                                <button onClick={() => handleDelete(student.id)}>Delete</button>                   
                                <button onClick={() => navigate(`/students/${student.id}`)}>Edit</button>                 
                            </td>               
                        </tr>             
                    ))}           
                </tbody>         
            </table>       
        </div>     
    );   
};      

export default StudentList;
