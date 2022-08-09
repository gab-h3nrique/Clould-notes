import Link from 'next/link'
/* components */
import Layout from '../components/Layout'
import Card from '../components/Card'
        // interface
        import {UserNotes} from '../components/Card'
        // interface
/* components */

/* hooks */
import type { NextPage } from 'next'
import { useState } from 'react'
/* hooks */

/* db */
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
/* db */

export async function getServerSideProps() {
  const notes = await prisma.note.findMany();
  return {
    props: { initialNotes: notes }
  }
}

const Notes: NextPage = ({initialNotes}:any) => {
  const [notes, setNotes] = useState<UserNotes[]>(initialNotes);

  const addNote = () => {
  }

  return (
    <Layout>
      <div className="flex justify-center">
        <div  className="container bg-gray-200 w-xl p-5">
          <div className="flex">
            <input type="text" placeholder="Search" className="rounded-lg" />
            <button type="button" className="">Search</button>

            <Link href="/new">
              <a>New Notes</a>
            </Link>

          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div  className="default-grid">
          {
             notes.map( (notes:UserNotes) =>{
              // eslint-disable-next-line react/jsx-key
              return  <Card key={notes.id} notes={notes} />
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default Notes;