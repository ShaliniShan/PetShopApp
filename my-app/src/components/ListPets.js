import React, { useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

const PER_PAGE = 100;


export default function ListPets(){
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setName] = useState([])

//To fetch from json server

    useEffect (() => {
        fetch('http://localhost:3002/pet')
        .then(res => res.json())
        .then(data  => setName(data))
    }, [])

 
//To handle pagination

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
      }
    
      const offset = currentPage * PER_PAGE;
    
      const currentPageData = data
        .slice(offset, offset + PER_PAGE)
        .map(pet => (
            <p key = {pet.id}>{pet.name}</p>
        ));
    
      const pageCount = Math.ceil(data.length / PER_PAGE);
    
    return (
    <><div>
      <Link to="/" style={{ textDecoration: 'none'}}>
        <button id = 'addButton' variant="outlined">
          Add Pets
        </button>
      </Link>

      <Link to="/listPets" style={{ textDecoration: 'none'}}>
          <button id = 'listButton' variant="outlined">
          List of Pets
          </button>
      </Link>
    </div>
        
    <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
       {currentPageData}
    </>
    
    );
    
    }   




