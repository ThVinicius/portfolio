import { NextResponse } from 'next/server'

import { prisma } from 'databases/prisma'

export async function GET() {
  const projects = await prisma.$queryRaw`
    SELECT p.id, p."name", p."type", p.description, p.image, tb.badges, tl.links 
    FROM projects p
    JOIN (SELECT project_id, 
          json_agg(json_build_object('id', l.id, 'label', l."label", 'href', l.href)) AS links
         FROM links l
         GROUP BY l.project_id) AS tl 
    ON tl.project_id = p.id
    JOIN (SELECT pb.project_id, 
          json_agg(json_build_object('name', b."name", 'image', b.image)) AS badges  
         FROM project_badges pb
         JOIN badges b ON b."name" = pb.badge_name
         GROUP BY pb.project_id) AS tb 
    ON tb.project_id = p.id
    ORDER BY p."position"
  `

  return NextResponse.json(projects)
}
