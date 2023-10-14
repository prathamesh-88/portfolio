---
title: "Caching and why you need it!?"
date: "2023-09-15"
tags: "Backend Developement, Web development, Optimizations"
---

Caching is a very familiar term for everyone whether you are a developer or not. “Try clearing the cache” is probably a statement that everyone has heard hundreds of time. But what exactly is a cache? How is it useful for you? As a developer, should you use it in your applications? If so, how can you do so? If these questions peak your intrigue, let’s jump into it.

# What is Caching?

Caching is a technique used in computer applications to improve performance. Caching involves storing frequently accessed data in a temporary storage location that are faster to access, such as memory or disk, to reduce the need to fetch the data from the original source repeatedly. By serving cached data instead of generating it dynamically, applications can deliver content faster and more efficiently.

We can consider an analogy of a librarian. Imagine you're a librarian managing a bustling library, and your goal is to provide books to library visitors as quickly as possible. However, the library's shelves are located in a distant storage room, making it time-consuming to retrieve books whenever someone requests them. To resolve this, you set up a small bookshelf right next to your librarian's desk.

In this analogy,

1. The small bookshelf is a cache. It is a limited storage space that can only hold a few books at a time.
2. The storage room is the main datastore that contains all the data present but takes time to access it.
3. The library visitors are the users or the client applications that require the data (books).

Caching is implemented in Operating systems, web application, system applications, basically in anything that deals with operations and storage of data.

In this article, we’ll focus on how caching is used and implemented in Web applications, especially in databases and backend services.

# Why do I need Database Caching?

Database caching, in particular, addresses critical challenges that web applications encounter. Most prominent of them are:

## Query Processing Speed

Database systems often face bottlenecks when processing complex queries or handling high volumes of concurrent requests. Database caching optimizes query processing speed by reducing the need to query the database repeatedly for the same data.

## Ease of Data Access

Efficient data access is essential for delivering a responsive user experience. Database caching ensures that frequently accessed data is readily available, eliminating the latency associated with database queries.

## Availability

By reducing the load on the database server, caching helps maintain high availability for your web application. It can prevent server overloads during traffic spikes or heavy usage periods.

## Cost and ability to Scale

Scaling database resources to accommodate increasing user loads can be expensive and resource-intensive. By effectively utilizing database caching, you can reduce the load on your database servers, potentially saving on infrastructure costs. Also, scaling itself becomes much more seamless and efficient.

# Caching Patterns

Now that you know what **Database Caching** is and why do you need it, it’s time to learn about some Caching strategies. Various caching patterns are available to us, each with its own set of advantages and disadvantages. Let's explore some common caching patterns:

## Cache-Aside (Lazy-loading)

Cache-Aside is one of the simplest and most commonly used caching strategy. It is a pattern that is used to read data. I like to call this “Hit and Miss caching” as that’s what it does. When an application needs to access any data, it first checks in the cache. If the data is available (cache hit) then it is fetched from the cache and returned. If the data is not available in the cache (cache miss) then it is fetched from the database.

![Cache-Aside Architecture](/images/cache-aside.png)

**This caching strategy provides many advantages such as:**

- **Fine-Grained Control:** Developers have precise control over what data is cached and when it is cached, making it suitable for scenarios where specific data needs optimization.
- **Simplicity:** The implementation of Cache-Aside caching is straightforward and easy to understand. It doesn't require complex cache management logic.
- **Efficient Use of Cache:** Since only frequently used data is cached, it optimizes the use of cache memory, preventing it from being filled with rarely used data.

**At the same time, you might want to consider the downsides of the strategy such as:**

- **Higher Miss Rates:** Because the cache is not automatically populated with all data, there can be higher cache miss rates, leading to more frequent database queries, especially for less frequently accessed data.
- **Potential for Data Inconsistency:** In scenarios where data in the database is updated frequently, there is a risk of serving outdated or inconsistent data from the cache, as Cache-Aside doesn't automatically handle cache invalidation.
- **Complex Cache Management:** In applications with a large amount of data or complex data access patterns, managing what data to cache and when to refresh it can become cumbersome and error-prone.

Cache-Aside (Lazy-Loading) caching is a pragmatic approach when you need fine-grained control over caching in your application. However, it may not be the best choice for situations where data consistency and cache management complexity are critical concerns.

## Read-Through

Read-through caching strategy is fairly similar to Cache-aside pattern. There is just a slight architectural difference. The cache lies between the application and database and so in case of a cache miss, the cache (generally a cache manager or similar entity) retrieves the data from the database instead of the application itself.

The advantages and shortcomings of this pattern is the same as that of Cache-aside.

![Read-Through Architecture](/images/read-through.png)

To avoid data inconsistency, these data reading patterns are usually implemented alongside a reliable data writing pattern like Write-Through

### **Write-Through**

In Write-Through strategy is used to write data to the cache and the database. When the application wants to write data to the database, it is first written to the cache and the same is immediately written to the database. This resolves the data consistency issue that we discussed earlier.

![Write-Through Architecture](/images/write-through.png)

**Advantages:**

- **Data Consistency**: It ensures that the data in the cache is always consistent with the underlying storage, reducing the risk of data discrepancies or conflicts.
- **High Data Integrity**: Since data is written directly to the underlying storage, there is a lower risk of data loss in case of a system failure or crash.
- **Faster Reads**: Read operations can benefit from cached data, resulting in reduced latency and faster response times when data is frequently read.

**Disadvantages:**

- **Write Overhead**: The immediate write to the underlying storage can introduce additional latency for write operations, potentially slowing down write-heavy workloads.
- **Cache Size and Efficiency**: Maintaining a cache that holds a full copy of the data can be resource-intensive. It may not be the most efficient choice for all scenarios, particularly when dealing with large datasets.

### Write-Back

Write-Back caching strategy is similar to Write-Through. Meaning, the data is first written to the cache from where it’s written to the database. However, unlike Write-Through caching, the process of writing the data to the database is not immediate but rather asynchronous. It is done at a more opportune time. This reduces the stress on the database that Write-Through strategy exerts by making the writes less frequent and thus, more efficient.

### Write-Around

In Write-Around Caching strategy, the data is first written to the underlying database or storage and is only moved to the cache once the application demands to read the said data. As you might have guessed, this will again pose the issue with data consistency. Thus, this strategy is only suited for applications that don’t require frequent re-reads.

There are numerous other caching strategies and you can also design your own for the use-case. The ultimate aim is to minimize load on the database or storage making the application faster and more efficient.

# Cache Replacement Mechanisms

Now you’ve learned about caching strategies. You should keep in mind that it is not feasible to store the replica of the entire underlying database or storage in the cache as the cache memory is limited and expensive. So you need some criteria to store and discard data from the cache over time to make space for new data. Cache replacement mechanisms play a crucial role in determining which data is evicted from the cache when space is limited. The basic cache replacement mechanisms can be categorized in the following three categories.

## Queue-Based:

In Queue-Based mechanisms, we consider the time at which a data element enters the cache relative to the other elements. Examples of the same are:

- **FIFO (First-In-First-Out)**: Replaces the oldest cache entry that was loaded into the cache.
- **LIFO (Last-In-First-Out):** Replaces the most recently added cache entry.

## Recency-Based algorithms:

The Recency-Based algorithms revolve around the time at which the data elements in the cache are accessed.

- **LRU (Least Recently Used):** Replaces the cache entry that has not been accessed for the longest time.
- **MRU (Most Recently Used):** Replaces the cache entry that has been accessed most recently.

## Frequency-Based algorithms:

The Frequency-Based algorithms revolve around the frequency at which the data elements in the cache are accessed.

- **LFU (Least Frequently Used)**: Replaces the cache entry that has the fewest accesses over time.
- **MFU** **(Most Frequently Used)**: Replaces the cache entry that has the most accesses over time.

Apart from these, there are some randomized and adaptive algorithms available. The choice of cache replacement mechanism depends on the specific use case and the expected access patterns of the data. No single mechanism is universally superior, and the selection of an appropriate policy often involves trade-offs between implementation complexity, predictability, and overall cache performance.

That’s it for now! Hope you found this article helpful. Stay tuned for the next article in which I walk you through implementing caching in an actual application using Redis database. Thank you for reading.
