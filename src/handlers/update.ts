import prisma from "../db";

// Get all updates for a user
export const getUpdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: {
      belongsToId: req.user.id,
    },
    include: {
      updates: true,
    },
  });

  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates];
  }, []);

  res.status(200).json({ data: updates });
};

// get a single update
export const getOneUpdate = async (req, res, next) => {
  try {
    const update = await prisma.update.findUnique({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({ update: update });
  } catch (err) {
    next(err);
  }
};

// Create a update
export const createUpdate = async (req, res, next) => {
  try {
    //const { productId, ...rest } = req.body;
    const product = await prisma.product.findUnique({
      where: {
        id: req.body.productId,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Cannot get product!" });
    }

    const update = await prisma.update.create({
      data: {
        title: req.body.title,
        body: req.body.body,
        product: { connect: { id: product.id } },
      },
    });

    res.status(201).json({ data: update });
  } catch (err) {
    next(err);
  }
};

// Update an update
export const updateUpdate = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        belongsToId: req.user.id,
      },
      include: {
        updates: true,
      },
    });

    const updates = products.reduce((allUpdates, product) => {
      return [...allUpdates, ...product.updates];
    }, []);

    const match = updates.find((update) => {
      return req.params.id === update.id;
    });

    if (!match) {
      return res.status(404).json({ message: "Can't find update!" });
    }

    const updatedUpdate = await prisma.update.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });

    res.status(201).json({ data: updatedUpdate });
  } catch (err) {
    next(err);
  }
};

export const deleteUpdate = async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        belongsToId: req.user.id,
      },
      include: {
        updates: true,
      },
    });

    const updates = products.reduce((allUpdates, product) => {
      return [...allUpdates, ...product.updates];
    }, []);

    const match = updates.find((update) => {
      return req.params.id === update.id;
    });

    if (!match) {
      return res.status(404).json({ message: "Can't find update!" });
    }

    const deleted = await prisma.update.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(204).json({ data: deleted });
  } catch (err) {
    next(err);
  }
};
