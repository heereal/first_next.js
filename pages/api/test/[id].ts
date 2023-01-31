import { NextApiRequest, NextApiResponse } from 'next';
type Data = {
    name: string,
}
  

export default function handelr(req: NextApiRequest,
    res: NextApiResponse<Data>) {
    const { id } = req.query;
    

    res.status(200).json({name: "test", id})
}