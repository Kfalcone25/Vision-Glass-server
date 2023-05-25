var express = require("express");
var router = express.Router();

const Testimonial = require('../models/Testimonial')

router.post("/", (req, res, next) => {
    const {firstName, lastName, description, rating} = req.body

    Testimonial.create(req.body)
    .then(response => res.json(response))
    .catch(err => res.json(err));
});

router.get('/', (req, res, next) => {

    Testimonial.find()
        .then(allTestimonials => res.json(allTestimonials))
        .catch(err => res.json(err));
});

router.get('/:testimonialId', (req, res, next) => {
    const { testimonialId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(testimonialId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Testimonial.findById(testimonialId)
        .then(testimonial => res.status(200).json(testimonial))
        .catch(error => res.json(error));
});

router.put('/:testimonialId', (req, res, next) => {
    const { testimonialId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(testimonialId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Testimonial.findByIdAndUpdate(testimonialId, req.body, {new: true })
        .then((updatedTestimonial) => res.json(updatedTestimonial))
        .catch(error => res.json(error));
});

router.delete('/:testimonialId', (req, res, next) => {
    const { testimonialId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(testimonialId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }    

    Testimonial.findByIdAndRemove(testimonialId)
        .then(() => res.json({ message: `Testimonial with ${testimonialId} is removed successfully.`}))
        .catch(err => res.json(err))
})

module.exports = router