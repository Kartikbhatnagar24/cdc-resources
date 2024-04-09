"use client";
import { useState } from "react";
import { Button, Space, Table } from "antd";
const data = [
    {
        key: "1",
        name: "Akhileshwar Pathak",
        mail: "akhil@iima.ac.in",
        domain: "Strategy"
    },
    {
        key: "2",
        name: "Amit Karna",
        mail: "karna@iima.ac.in",
        domain: "Strategy"
    },
    {
        key: "3",
        name: "Anish Sugathan",
        mail: "anishs@iima.ac.in",
        domain: "Strategy"
    },
    {
        key: "4",
        name: "Anurag K Agarwal",
        mail: "akagarwal@iima.ac.in",
        domain: "Strategy"
    },
    {
        key: "5",
        name: "Chitra Singla",
        mail: "chitras@iima.ac.in",
        domain: "Strategy"
    },
    {
        key: "6",
        name: "M P Ram Mohan",
        mail: "mprmohan@iima.ac.in",
        domain: "Strategy"
    },
    {
        key: "7",
        name: "Mohammad Fuad",
        mail: "mohammad@iima.ac.in",
        domain: "Strategy"
    },
    {
        key: "8",
        name: "Mukesh Sud",
        mail: "mukeshs@iima.ac.in",
        domain: "Strategy"
    },
    {
        key: "9",
        name: "Sunil Sharma",
        mail: "sunilsharma@iima.ac.in",
        domain: "Strategy"
    },
    {
        key: "10",
        name: "Hari K Nagarajan",
        mail: "hknagarajan@iima.ac.in",
        domain: "Centre for Management in Agriculture"
    },
    {
        key: "11",
        name: "Poornima Varma",
        mail: "poornimav@iima.ac.in",
        domain: "Centre for Management in Agriculture"
    },
    {
        key: "12",
        name: "Ranjan Kumar Ghosh",
        mail: "ranjang@iima.ac.in",
        domain: "Centre for Management in Agriculture"
    },
    {
        key: "13",
        name: "Sukhpal Singh",
        mail: "sukhpal@iima.ac.in",
        domain: "Centre for Management in Agriculture"
    },
    {
        key: "14",
        name: "Vidya Vemireddy",
        mail: "vidyav@iima.ac.in",
        domain: "Centre for Management in Agriculture"
    },
    {
        key: "15",
        name: "Vijay Paul Sharma",
        mail: "vijays@iima.ac.in",
        domain: "Centre for Management in Agriculture"
    },
    {
        key: "16",
        name: "Asha Kaul",
        mail: "ashakaul@iima.ac.in",
        domain: "Communication"
    },
    {
        key: "17",
        name: "Meenakshi Sharma",
        mail: "msharma@iima.ac.in",
        domain: "Communication"
    },
    {
        key: "18",
        name: "Vaibhavi Kulkarni",
        mail: "vaibhavik@iima.ac.in",
        domain: "Communication"
    },
    {
        key: "19",
        name: "Abhiman Das",
        mail: "abhiman@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "20",
        name: "Abhiman Das",
        mail: "abhiman@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "21",
        name: "Anindya Chakrabarti",
        mail: "anindyac@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "22",
        name: "Chinmay Tumbe",
        mail: "chinmayt@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "23",
        name: "Errol D'Souza",
        mail: "errol@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "24",
        name: "Jeevant Rampal",
        mail: "jeevantr@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "25",
        name: "Pritha Dev",
        mail: "pritha@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "26",
        name: "Rakesh Basant",
        mail: "rakesh@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "27",
        name: "Sanket Mohapatra",
        mail: "sanketm@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "28",
        name: "Satish Deodhar",
        mail: "satish@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "29",
        name: "Tarun Jain",
        mail: "tarunj@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "30",
        name: "Pingali Viswanath",
        mail: "viswanath@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "31",
        name: "Chirantan Chatterjee",
        mail: "chirantanc@iima.ac.in",
        domain: "Economics"
    },
    {
        key: "32",
        name: "Ajay Pandey",
        mail: "apandey@iima.ac.in",
        domain: "Finance and Accounting"
    },
    {
        key: "33",
        name: "Jayanth R Varma",
        mail: "jrvarma@iima.ac.in",
        domain: "Finance and Accounting"
    },
    {
        key: "34",
        name: "Joshy Jacob",
        mail: "joshyjacob@iima.ac.in",
        domain: "Finance and Accounting"
    },
    {
        key: "35",
        name: "Naman Desai",
        mail: "namand@iima.ac.in",
        domain: "Finance and Accounting"
    },
    {
        key: "36",
        name: "Neerav Nagar",
        mail: "neeravn@iima.ac.in",
        domain: "Finance and Accounting"
    },
    {
        key: "37",
        name: "Pranav Singh",
        mail: "pranav@iima.ac.in",
        domain: "Finance and Accounting"
    },
    {
        key: "38",
        name: "Shailesh Gandhi",
        mail: "shailesh@iima.ac.in",
        domain: "Finance and Accounting"
    },
    {
        key: "39",
        name: "Sidharth Sinha",
        mail: "sidharth@iima.ac.in",
        domain: "Finance and Accounting"
    },
    {
        key: "40",
        name: "Sobhesh Kumar Agarwalla",
        mail: "sobhesh@iima.ac.in",
        domain: "Finance and Accounting"
    },
    {
        key: "41",
        name: "T T Ram Mohan",
        mail: "ttr@iima.ac.in",
        domain: "Finance and Accounting"
    },
    {
        key: "42",
        name: "Vineet Virmani",
        mail: "vineetv@iima.ac.in",
        domain: "Finance and Accounting"
    },
    {
        key: "43",
        name: "Aditya Christopher Moses",
        mail: "adityam@iima.ac.in",
        domain: "Human Resources Management"
    },
    {
        key: "44",
        name: "Biju Varkey",
        mail: "bvarkeyiima.ac.in",
        domain: "Human Resources Management"
    },
    {
        key: "45",
        name: "Manjari Singh",
        mail: "manjari@iima.ac.in",
        domain: "Human Resources Management"
    },
    {
        key: "46",
        name: "Promila Agarwal",
        mail: "promila@iima.ac.in",
        domain: "Human Resources Management"
    },
    {
        key: "47",
        name: "Rajesh Chandwani",
        mail: "rajeshc@iima.ac.in",
        domain: "Human Resources Management"
    },
    {
        key: "48",
        name: "Sunil Maheshwari",
        mail: "sunilm@iima.ac.in",
        domain: "Human Resources Management"
    },
    {
        key: "49",
        name: "Adrija Majumdar",
        mail: "adrija@iima.ac.in",
        domain: "Information Systems"
    },
    {
        key: "50",
        name: "Pankaj Setia",
        mail: "pankajsetia@iima.ac.in",
        domain: "Information Systems"
    },
    {
        key: "51",
        name: "Samrat Gupta",
        mail: "samratg@iima.ac.in",
        domain: "Information Systems"
    },
    {
        key: "52",
        name: "Sanjay Verma",
        mail: "sverma@iima.ac.in",
        domain: "Information Systems"
    },
    {
        key: "53",
        name: "Swanand Deodhar",
        mail: "swanandd@iima.ac.in",
        domain: "Information Systems"
    },
    {
        key: "54",
        name: "Akshaya Vijayalakshmi",
        mail: "akshayav@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "55",
        name: "Anand Kumar Jaiswal",
        mail: "akjaiswal@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "56",
        name: "Anuj Kapoor",
        mail: "anujk@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "57",
        name: "Arindam Banerjee",
        mail: "arindam@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "58",
        name: "Arvind Sahay",
        mail: "asahay@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "59",
        name: "Hyokjin Kwak",
        mail: "hkwak@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "60",
        name: "Naveen Amblee",
        mail: "naveena@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "61",
        name: "Rajat Sharma",
        mail: "rajats@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "62",
        name: "Rama Bijapurkar",
        mail: "ramab@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "63",
        name: "Ramanathan Subramaniam",
        mail: "ramanathan@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "64",
        name: "Soumya Mukhopadhyay",
        mail: "soumyam@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "65",
        name: "Sourav Borah",
        mail: "souravb@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "66",
        name: "Subhadip Roy",
        mail: "subhadipr@iima.ac.in",
        domain: "Marketing"
    },
    {
        key: "67",
        name: "Amit Nandkeolyar",
        mail: "amitn@iima.ac.in",
        domain: "Organizational Behaviour"
    },
    {
        key: "68",
        name: "Ernesto Noronha",
        mail: "enoronha@iima.ac.in",
        domain: "Organizational Behaviour"
    },
    {
        key: "69",
        name: "K V Gopakumar",
        mail: "kvgopakumar@iima.ac.in",
        domain: "Organizational Behaviour"
    },
    {
        key: "70",
        name: "Kandathil George",
        mail: "gmk@iima.ac.in",
        domain: "Organizational Behaviour"
    },
    {
        key: "71",
        name: "Kirti Sharda",
        mail: "kirti@iima.ac.in",
        domain: "Organizational Behaviour"
    },
    {
        key: "72",
        name: "Neharika Vohra",
        mail: "neharika@iima.ac.in",
        domain: "Organizational Behaviour"
    },
    {
        key: "73",
        name: "Parvinder Gupta",
        mail: "pgupta@iima.ac.in",
        domain: "Organizational Behaviour"
    },
    {
        key: "74",
        name: "Pradyumana Khokle",
        mail: "khokle@iima.ac.in",
        domain: "Organizational Behaviour"
    },
    {
        key: "75",
        name: "Premilla D'Cruz",
        mail: "pdcruz@iima.ac.in",
        domain: "Organizational Behaviour"
    },
    {
        key: "76",
        name: "Vishal Gupta",
        mail: "vishal@iima.ac.in",
        domain: "Organizational Behaviour"
    },
    {
        key: "77",
        name: "Ankur Sinha",
        mail: "asinha@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "78",
        name: "Arnab Kumar Laha",
        mail: "arnab@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "79",
        name: "Chetan Soman",
        mail: "chetan@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "80",
        name: "Debjit Roy",
        mail: "debjit@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "81",
        name: "Dhiman Bhadra",
        mail: "dhiman@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "82",
        name: "Diptesh Ghosh",
        mail: "diptesh@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "83",
        name: "Goutam Dutta",
        mail: "goutam@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "84",
        name: "Karthik Sriram",
        mail: "karthiks@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "85",
        name: "Sachin Jayaswal",
        mail: "sachin@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "86",
        name: "Saral Mukherjee",
        mail: "saralm@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "87",
        name: "Sriram Sankaranarayanan",
        mail: "srirams@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "88",
        name: "Tathagata Bandyopadhyay",
        mail: "tathagata@iima.ac.in",
        domain: "Production and Quantitative Methods"
    },
    {
        key: "89",
        name: "Amit Garg",
        mail: "amitgarg@iima.ac.in",
        domain: "Public Systems Group"
    },
    {
        key: "90",
        name: "Ankur Sarin",
        mail: "asarin@iima.ac.in",
        domain: "Public Systems Group"
    },
    {
        key: "91",
        name: "Navdeep Mathur",
        mail: "navdeep@iima.ac.in",
        domain: "Public Systems Group"
    },
    {
        key: "92",
        name: "Rajnish Rai",
        mail: "rajnishrai@iima.ac.in",
        domain: "Public Systems Group"
    },
    {
        key: "93",
        name: "Rama Mohana R Turaga",
        mail: "mohant@iima.ac.in",
        domain: "Public Systems Group"
    },
    {
        key: "94",
        name: "Sandip Chakrabarti",
        mail: "sandipc@iima.ac.in",
        domain: "Public Systems Group"
    },
    {
        key: "95",
        name: "Sundaravalli Narayanaswami",
        mail: "sundaravallin@iima.ac.in",
        domain: "Public Systems Group"
    },
    {
        key: "96",
        name: "Ambrish Dongre",
        mail: "ambrishd@iima.ac.in",
        domain: "Ravi J Matthai Centre for Educational Innovation"
    },
    {
        key: "97",
        name: "Devasmita Chakraverty",
        mail: "devasmitac@iima.ac.in",
        domain: "Ravi J Matthai Centre for Educational Innovation"
    },
    {
        key: "98",
        name: "Kathan Shukla",
        mail: "kathans@iima.ac.in",
        domain: "Ravi J Matthai Centre for Educational Innovation"
    },
    {
        key: "99",
        name: "Sherry Chand Vijaya",
        mail: "vijaya@iima.ac.in",
        domain: "Ravi J Matthai Centre for Educational Innovation"
    }
];



const TablesPage = () => {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };
    const columns = [
        {
            title: "IIM Professor's Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Mail Address",
            dataIndex: "mail",
            key: "mail",
        },
        {
            title: "Domain",
            dataIndex: "domain",
            key: "domain",
            filters: [{
                text: "Strategy",
                value: "Strategy"
            },
            {
                text: "Centre for Management in Agriculture",
                value: "Centre for Management in Agriculture"
            }, {
                text: "Communication",
                value: "Communication"
            }, {
                text: "Economics",
                value: "Economics"
            }, {
                text: "Finance and Accounting",
                value: "Finance and Accounting"
            }, {
                text: "Human Resources Management",
                value: "Human Resources Management"
            }, {
                text: "Information Systems",
                value: "Information Systems"
            }, {
                text: "Marketing",
                value: "Marketing"
            }, {
                text: "Organizational Behaviour",
                value: "Organizational Behaviour"
            }, {
                text: "Production and Quantitative Methods",
                value: "Production and Quantitative Methods"
            }, {
                text: "Public Systems Group",
                value: "Public Systems Group"
            }, {
                text: "Ravi J Matthai Centre for Educational Innovation",
                value: "Ravi J Matthai Centre for Educational Innovation"
            }
            ],

            filteredValue: filteredInfo.domain || null,
            onFilter: (value, record) => record.domain === value,
            sorter: (a, b) => a.domain.localeCompare(b.domain),
            sortOrder: sortedInfo.columnKey === 'domain' ? sortedInfo.order : null,
            ellipsis: true,
        },
    ];

    return (
        <div className="mx-auto max-w-4xl py-6 m-2 rounded-lg">
            <Space
                style={{
                    marginBottom: 16,
                }}
            >
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear all</Button>
            </Space>
            <Table columns={columns} dataSource={data} onChange={handleChange} />
        </div>
    );
}

export default TablesPage;