"use client";
import { useState } from "react";
import { Button, Space, Table } from "antd";
import { data } from "./tableData";
import Link from 'next/link'
import Image from 'next/image'
const CorporateDataPage = () => {
    console.log('data', data);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    const handleChange = (pagination, filters, sorter) => {
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
            title: "Name",
            dataIndex: "Name",
            key: "Name",
        },
        {
            title: "Company Name",
            dataIndex: "Company Name",
            key: "Company Name",
        },
        {
            title: "Job Title",
            dataIndex: "Job Title",
            key: "Job Title",
        },
        {
            title: "Linkedin Url",
            dataIndex: "Linkedin URL",
            key: "Linkedin Url",
            render:(value)=>{return <Link href={value} target="_blank" className="flex justify-center items-center">{value.length!==0 ? <Image src={"/linkedin.png"}  width={30} height={30} alt="Linkedin"/> : "--"}</Link>} 
        },
        {
            title: "Company Linkedin",
            dataIndex: "CompLink",
            key: "Company Linkedin",
            render:(value)=>{return <Link href={value} target="_blank" className="flex justify-center items-center">{value.length!==0 ? <Image src={"/linkedin.png"}  width={30} height={30} alt="Linkedin"/> : "--"}</Link>} 
        },
        {
            title: "Company Website",
            dataIndex: "Company Website",
            key: "Company Website",
            render:(value)=>{return <Link href={value}>{value.length!==0 ? "Website" : "--"}</Link>} 
        },
        {
            title: "Domain",
            dataIndex: "domain",
            key: "domain",
            filters: [{
                text: "Automotive",
                value: "Automotive"
            }, {
                text: "Human Resources",
                value: "Human Resources"
            }, {
                text: "Biotechnology",
                value: "Biotechnology"
            }, {
                text: "Computer & Network Security",
                value: "Computer & Network Security"
            }, {
                text: "Computer Games",
                value: "Computer Games"
            }, {
                text: "Financial Services",
                value: "Financial Services"
            }, {
                text: "Government Administration",
                value: "Goversnment Administration"
            }, {
                text: "Higher Education",
                value: "Higher Education"
            }, {
                text: "Information Technology & Services",
                value: "Information Technology & Services"
            }, {
                text: "Management Consulting",
                value: "Management Consulting"
            }, {
                text: "Mechanical Or Industrial Engineering",
                value: "Mechanical Or Industrial Engineering"
            }, {
                text: "Semiconductors",
                value: "Semiconductors"
            },
            {
                text: "Telecommunications",
                value: "Telecommunications"
            },
            {
                text: "Venture Capital & Private Equity",
                value: "Venture Capital & Private Equity"
            },
            {
                text: "Electrical/electronic Manufacturing",
                value: "Electrical/electronic Manufacturing"
            },
            {
                text: "Computer Hardware",
                value: "Computer Hardware"
            },
            ],

            filteredValue: filteredInfo.domain || null,
            onFilter: (value, record) => record.domain === value,
            sorter: (a, b) => a.domain.localeCompare(b.domain),
            sortOrder: sortedInfo.columnKey === 'domain' ? sortedInfo.order : null,
            ellipsis: true,
        },
    ];

    return (
        <div className="mx-auto max-w-4xl h-full py-6 m-2 rounded-lg">
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

export default CorporateDataPage;