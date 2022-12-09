import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),

  rest.get('/students', (req, res, ctx) => {
    const searchingStudents = students.filter((student) =>
      student.name
        .toLowerCase()
        .includes(req.url.searchParams.get('search').toLowerCase())
    );
    return res(ctx.status(200), ctx.json({ students: searchingStudents }));
  }),

  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group !== 'undefined') {
      const matchingStudents = students.filter(
        (student) => student.group === req.params.group
      );

      return res(ctx.status(200), ctx.json({ students: matchingStudents }));
    }

    return res(ctx.status(200), ctx.json({ students }));
  }),
];
